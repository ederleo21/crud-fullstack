import { useState } from "react";

export const FilterCarrera = ({ modalidades, onFilter }) => {
  const [search, setSearch] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("todos");
  const [modalidadFilter, setModalidadFilter] = useState("todas");

  const handleFilterChange = (newSearch, newEstado, newModalidad) => {
    onFilter({
      search: newSearch ?? search,
      estado: newEstado ?? estadoFilter,
      modalidad: newModalidad ?? modalidadFilter,
    });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Buscar por nombre */}
      <input
        type="text"
        placeholder="Buscar carrera..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleFilterChange(e.target.value, null, null);
        }}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
      />

      {/* Filtrar por estado */}
      <select
        value={estadoFilter}
        onChange={(e) => {
          setEstadoFilter(e.target.value);
          handleFilterChange(null, e.target.value, null);
        }}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-green-300"
      >
        <option value="todos">Todos</option>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select>

      {/* Filtrar por modalidad */}
      <select
        value={modalidadFilter}
        onChange={(e) => {
          setModalidadFilter(e.target.value);
          handleFilterChange(null, null, e.target.value);
        }}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
      >
        <option value="todas">Todas las modalidades</option>
        {modalidades.map((m) => (
          <option key={m.id} value={m.id}>
            {m.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};