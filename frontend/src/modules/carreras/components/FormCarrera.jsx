import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ModalForm } from '../../../global/components/atoms/ModalForm';
import { InputField } from '../../../global/components/atoms/InputField';
import { createCarrera, updateCarrera } from '../services/carreraServices';
import { handleFormSubmit } from '../../../global/utils/handleFormSubmit';

export const FormCarrera = ({ isOpen, onClose, modalidades = [], carrera = null, setCarreras }) => {
  
  const isEdit = Boolean(carrera);

  const initialValues = {
    nombre: carrera?.nombre || '',
    estado: carrera?.estado ?? true,
    modalidad_id: carrera?.modalidad?.id || '',
  };

  const CarreraSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es obligatorio'),
    modalidad_id: Yup.number()
      .typeError('Seleccione una modalidad') 
      .required('Seleccione una modalidad')
      .min(1, 'Seleccione una modalidad válida'),
    estado: Yup.boolean(),
  });

  const handleSubmit = async(values, actions) => {
      const requestFn = isEdit ? updateCarrera : createCarrera;
      const idSource = isEdit ? carrera.id : null;

      const {success, data} = await handleFormSubmit({
        requestFn,
        values,
        idSource,
        messageSuccess: isEdit ? "Actualizado con éxito" : "Creado con éxito"
      }, actions)
      if (success) {
        if (isEdit) {
          setCarreras(prev =>
            prev.map(c => c.id === data.id ? data : c)
          );
        } else {
          setCarreras(prev => [...prev, data]);
        }
        onClose();
      }
  } 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CarreraSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <ModalForm
            isOpen={isOpen}
            onClose={onClose}
            title={isEdit ? "Editar Carrera" : "Crear Carrera"}
            isSubmitting={isSubmitting}
          >
            {/* Nombre */}
            <InputField
              name="nombre"
              label="Nombre"
              placeholder="Ingrese el nombre de la carrera"
            />

            {/* Estado */}
            <div className="flex items-center gap-2">
              <InputField
                name="estado"
                type="checkbox"
                label="Activo"
                checked={values.estado}
                onChange={() => setFieldValue('estado', !values.estado)}
                inputClassName="w-5 h-5"
              />
            </div>

            {/* Modalidad */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Modalidad</label>
              <select
                name="modalidad_id"
                value={values.modalidad_id}
                onChange={(e) => setFieldValue('modalidad_id', parseInt(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Seleccione una modalidad --</option>
                {modalidades.map((mod) => (
                  <option key={mod.id} value={mod.id}>
                    {mod.nombre}
                  </option>
                ))}
              </select>
              {/* Aquí mostramos el error */}
              <ErrorMessage
                name="modalidad_id"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

          </ModalForm>
        </Form>
      )}
    </Formik>
  );
};