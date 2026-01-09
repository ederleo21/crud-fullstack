
export const RowTableCarrera = ({ carrera, index, onEdit, onDelete }) => {
  return (
    <tr
      key={carrera.id}
      className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
    >
      <td className="px-6 py-4 text-gray-700 font-medium">{carrera.id}</td>
      <td className="px-6 py-4 text-gray-800 font-semibold">{carrera.nombre}</td>
      <td className="px-6 py-4 text-gray-700">{carrera.modalidad.nombre}</td>
      <td className="px-6 py-4">
        {carrera.estado ? (
          <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">
            Activo
          </span>
        ) : (
          <span className="px-3 py-1 text-sm font-semibold text-red-800 bg-red-200 rounded-full">
            Inactivo
          </span>
        )}
      </td>
      <td className="px-6 py-4 flex space-x-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg shadow hover:bg-blue-600 transition transform hover:scale-105"
          onClick={() => onEdit(carrera)}
        >
          Editar
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition transform hover:scale-105"
          onClick={() => onDelete(carrera)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};