import { useState } from 'react';
import { FormModalidad } from './FormModalidad';
import { ModalDelete } from '../../../global/components/layout/ModalDelete';
import { deleteModalidad } from '../services/modalidadServices';
import { toast } from 'react-toastify';
import { FilterModalidad } from './FilterModalidad';
import { useDispatch } from 'react-redux';
import { removeModalidad } from '../slices/modalidadSlice';
import { RowTableModalidad } from './RowTableModalidad';

export const TableModalidad = ({ modalidades }) => {
  const [openModalForm, setModalForm] = useState(false); 
  const [openModalDelete, setModalDelete] = useState(false);
  const [selectedModalidad, setSelectedModalidad] = useState(null);
  const [filters, setFilters] = useState({ search: "", estado: "todos" });
  const dispatch = useDispatch();

  const handleEdit = (modalidad) => {
    setSelectedModalidad(modalidad);
    setModalForm(true);
  };

  const handleDelete = (modalidad) => {
    setSelectedModalidad(modalidad)
    setModalDelete(true);
  }

  const confirmModal = async(modalidad) => {
    try {
      await deleteModalidad(modalidad.id);
      toast.success("Modalidad eliminada!")
      dispatch(removeModalidad(modalidad.id))
      setModalDelete(false);
    } catch (error) {
      toast.error("Error al eliminar la modalidad")
    }
  }

  const filteredModalidades = modalidades.filter(modalidad => {
  const matchSearch = modalidad.nombre.toLowerCase().includes(filters.search.toLowerCase());
  const matchEstado =
    filters.estado === "todos"
      ? true
      : filters.estado === "activo"
      ? modalidad.estado === true
      : modalidad.estado === false;
  return matchSearch && matchEstado;
  })

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 p-6 font-poppins">
        <div className="bg-green-50 shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-lora tracking-wide">
              Modalidades
            </h3>
            <button
              onClick={() => { setModalForm(true), setSelectedModalidad(null) }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 font-semibold"
            >
              + Añadir modalidad
            </button>
          </div>

          <FilterModalidad onFilter={setFilters} />

          {/* Tabla */}
          {filteredModalidades && filteredModalidades.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow max-h-96 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredModalidades.map((modalidad, index) => (
                    <RowTableModalidad
                      key={modalidad.id}
                      modalidad={modalidad}
                      index={index}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-6 text-lg font-medium">
              No hay modalidades disponibles
            </p>
          )}
        </div>
      </div>
        
      {/* Formulario Modal */}
      <FormModalidad
        isOpen={openModalForm}
        onClose={() => setModalForm(false)}
        modalidad={selectedModalidad}
      />

      {/* Modal de confirmación */}
      {openModalDelete && (
        <ModalDelete
          onClose={() => setModalDelete(false)}
          onConfirm={() => confirmModal(selectedModalidad)}
          title={"Eliminar Modalidad"}
        >
          Se eliminará esta modalidad de forma permanente.
        </ModalDelete>
      )}
    </>
  );
};
