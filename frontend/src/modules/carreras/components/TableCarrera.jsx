import { FormCarrera } from './FormCarrera';
import { useState } from 'react';
import { ModalDelete } from '../../../global/components/atoms/ModalDelete';
import { deleteCarrera } from '../services/carreraServices';
import { toast } from 'react-toastify';
import { FilterCarrera } from './FilterCarrera';

export const TableCarrera = ({ carreras, setCarreras, modalidades }) => {
  const [openModalForm, setModalForm] = useState(false); 
  const [openModalDelete, setModalDelete] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const [filters, setFilters] = useState({ search: "", estado: "todos", modalidad: "todas" });

  const handleCreate = () => {
    setSelectedCarrera(null);
    setModalForm(true);
  }

  const handleEdit = (carrera) => {
    setSelectedCarrera(carrera)
    setModalForm(true);
  }

  const handleDelete = (carrera) => {
    setSelectedCarrera(carrera)
    setModalDelete(true);
  }

  const confirmModal = async(carrera) => {
    try{  
      await deleteCarrera(carrera.id)
      toast.success("Carrera eliminada!")
      setCarreras(prev => prev.filter(c => c.id !== carrera.id));
      setModalDelete(false);
    }catch(error){
      toast.error("Error al eliminar la carrera!")
    }
  }

  const filteredCarreras = carreras.filter(carrera => {
  const matchSearch = carrera.nombre.toLowerCase().includes(filters.search.toLowerCase());
  const matchEstado =
    filters.estado === "todos"
      ? true
      : filters.estado === "activo"
      ? carrera.estado === true
      : carrera.estado === false;
  const matchModalidad =
    filters.modalidad === "todas"
      ? true
      : carrera.modalidad.id === parseInt(filters.modalidad);
  return matchSearch && matchEstado && matchModalidad;
  });

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6 font-poppins">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <h3 className="text-3xl font-bold text-gray-800 font-lora tracking-wide">
              Carreras
            </h3>
            <button
              onClick={handleCreate}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 font-semibold"
            >
              + Crear
            </button>
          </div>

          {/* Panel de filtros */}
          <FilterCarrera modalidades={modalidades} onFilter={setFilters} />

          {/* Tabla */}
          {filteredCarreras && filteredCarreras.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Modalidad</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCarreras.map((carrera, index) => (
                    <tr key={carrera.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}>
                      <td className="px-6 py-4 text-gray-700 font-medium">{carrera.id}</td>
                      <td className="px-6 py-4 text-gray-800 font-semibold">{carrera.nombre}</td>
                      <td className="px-6 py-4 text-gray-700">{carrera.modalidad.nombre}</td>
                      <td className="px-6 py-4">
                        {carrera.estado ? (
                          <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">Activo</span>
                        ) : (
                          <span className="px-3 py-1 text-sm font-semibold text-red-800 bg-red-200 rounded-full">Inactivo</span>
                        )}
                      </td>
                      <td className="px-6 py-4 flex space-x-3">
                        <button
                          className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg shadow hover:bg-blue-600 transition transform hover:scale-105"
                          onClick={() => handleEdit(carrera)}
                        >
                          Editar
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition transform hover:scale-105"
                          onClick={() => handleDelete(carrera)}
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
              No hay carreras disponibles
            </p>
          )}
        </div>
      </div>

      {/* Formulario Modal */}
      <FormCarrera
        isOpen={openModalForm}
        onClose={() => setModalForm(false)}
        carrera={selectedCarrera}
        setCarreras={setCarreras}
        modalidades={modalidades}
      />

      {/* Modal de confirmación */}
      {openModalDelete && (
        <ModalDelete
          onClose={() => setModalDelete(false)}
          onConfirm={() => confirmModal(selectedCarrera)}
          title={"Eliminar Carrera"}
        >
          <p className="text-gray-700 font-medium">
            Se eliminará esta carrera de forma permanente.
          </p>
        </ModalDelete>
      )}
    </>
  );
};
