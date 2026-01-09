import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { ModalForm } from '../../../global/components/atoms/ModalForm';
import { InputField } from '../../../global/components/atoms/InputField';
import { handleFormSubmit } from '../../../global/utils/handleFormSubmit';
import { createModalidad, updateModalidad } from '../services/modalidadServices';

export const FormModalidad = ({ isOpen, onClose, modalidad=null, setModalidades }) => {

  const isEdit = Boolean(modalidad);

  const initialValues = {
    nombre: modalidad?.nombre || '',
    estado: modalidad?.estado ?? true, 
  };

  const ModalidadSchema = Yup.object().shape({
    nombre: Yup.string()
      .max(100, 'Máximo 100 caracteres')
      .required('El nombre es obligatorio'),
    estado: Yup.boolean(),
  });

  const handleSubmit = async (values, actions) => {
    const requestFn = isEdit ? updateModalidad : createModalidad;
    const idSource = isEdit ? modalidad.id : null;

    const { success, data } = await handleFormSubmit({
      requestFn,
      values,
      idSource,
      messageSuccess: isEdit ? "Actualizado con éxito" : "Creado con éxito"
    }, actions);

    if (success) {
         if (isEdit) {
           setModalidades(prev =>
             prev.map(m => m.id === data.id ? data : m)
           );
         } else {
           setModalidades(prev => [...prev, data]);
         }
         onClose();
       }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ModalidadSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <ModalForm
            isOpen={isOpen}
            onClose={onClose}
            title={isEdit ? "Editar Modalidad" : "Crear Modalidad"}
            isSubmitting={isSubmitting}
          >
            <InputField
              name="nombre"
              label="Nombre"
              placeholder="Ingrese el nombre de la modalidad"
            />

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
          </ModalForm>
        </Form>
      )}
    </Formik>
  );
};
