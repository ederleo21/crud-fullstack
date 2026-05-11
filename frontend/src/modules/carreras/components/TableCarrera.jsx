import { FormCarrera } from './FormCarrera';
import { useState } from 'react';
import { ModalDelete } from '../../../global/components/layout/ModalDelete';
import { deleteCarrera } from '../services/carreraServices';
import { toast } from 'react-toastify';
import { FilterCarrera } from './FilterCarrera';
import { useDispatch } from 'react-redux';
import { removeCarrera } from '../slices/carreraSlice';
import { RowTableCarrera } from './RowTableCarrera';

export const TableCarrera = ({ carreras, modalidades }) => {
  const [openModalForm, setModalForm] = useState(false); 
  const [openModalDelete, setModalDelete] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const [filters, setFilters] = useState({ search: "", estado: "todos", modalidad: "todas" });
  const dispatch = useDispatch();
  
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
      dispatch(removeCarrera(carrera.id))
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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6 font-poppins">
        <div className="bg-blue-50 shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <h3 className="text-3xl font-bold text-gray-800 font-lora tracking-wide">
              Carreras
            </h3>
            <button
              onClick={() => { setModalForm(true), setSelectedCarrera(null) }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 font-semibold"
            >
              + Añadir carrera
            </button>
          </div>

          {/* Panel de filtros */}
          <FilterCarrera modalidades={modalidades} onFilter={setFilters} />

          {/* Tabla */}
          {filteredCarreras && filteredCarreras.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow max-h-96 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-900 text-white sticky top-0 z-10">
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
                    <RowTableCarrera
                      key={carrera.id}
                      carrera={carrera}
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
        modalidades={modalidades}
      />

      {/* Modal de confirmación */}
      {openModalDelete && (
        <ModalDelete
          onClose={() => setModalDelete(false)}
          onConfirm={() => confirmModal(selectedCarrera)}
          title={"Eliminar Carrera"}
        >
          Se eliminará esta carrera de forma permanente.
        </ModalDelete>
      )}
    </>
  );
};
