import { useState } from 'react';
import { FormModalidad } from './FormModalidad';
import { ModalDelete } from '../../../global/components/atoms/ModalDelete';
import { deleteModalidad } from '../services/modalidadServices';
import { toast } from 'react-toastify';
import { FilterModalidad } from './FilterModalidad';

export const TableModalidad = ({ modalidades, setModalidades }) => {
  const [openModalForm, setModalForm] = useState(false); 
  const [openModalDelete, setModalDelete] = useState(false);
  const [selectedModalidad, setSelectedModalidad] = useState(null);
  const [filters, setFilters] = useState({ search: "", estado: "todos" });

  const handleCreate = () => {
    setSelectedModalidad(null); 
    setModalForm(true);
  };

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
      setModalidades(prev => prev.filter(c => c.id !== modalidad.id));
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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6 font-poppins">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-lora tracking-wide">
              Modalidades
            </h3>
            <button
              onClick={handleCreate}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 font-semibold"
            >
              + Crear
            </button>
          </div>

          <FilterModalidad onFilter={setFilters} />

          {/* Tabla */}
          {filteredModalidades && filteredModalidades.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredModalidades.map((modalidad, index) => (
                    <tr key={modalidad.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}>
                      <td className="px-6 py-4 text-gray-700 font-medium">{modalidad.id}</td>
                      <td className="px-6 py-4 text-gray-800 font-semibold">{modalidad.nombre}</td>
                      <td className="px-6 py-4">
                        {modalidad.estado ? (
                          <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">Activo</span>
                        ) : (
                          <span className="px-3 py-1 text-sm font-semibold text-red-800 bg-red-200 rounded-full">Inactivo</span>
                        )}
                      </td>
                      <td className="px-6 py-4 flex space-x-3">
                        <button
                          onClick={() => handleEdit(modalidad)}
                          className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg shadow hover:bg-blue-600 transition transform hover:scale-105"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(modalidad)}
                          className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition transform hover:scale-105"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
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
        setModalidades={setModalidades}
      />

      {/* Modal de confirmación */}
      {openModalDelete && (
        <ModalDelete
          onClose={() => setModalDelete(false)}
          onConfirm={() => confirmModal(selectedModalidad)}
          title={"Eliminar Modalidad"}
        >
          <p className="text-gray-700 font-medium">
            Se eliminará esta modalidad de forma permanente.
          </p>
        </ModalDelete>
      )}
    </>
  );
};
