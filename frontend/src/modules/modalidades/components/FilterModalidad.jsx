import { useState } from "react";

export const FilterModalidad = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("todos");

  const handleFilterChange = (newSearch, newEstado) => {
    onFilter({
      search: newSearch ?? search,
      estado: newEstado ?? estadoFilter,
    });
  };

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Buscar modalidad..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleFilterChange(e.target.value, null);
        }}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
      />

      <select
        value={estadoFilter}
        onChange={(e) => {
          setEstadoFilter(e.target.value);
          handleFilterChange(null, e.target.value);
        }}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-green-300"
      >
        <option value="todos">Todos</option>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select>
    </div>
  );
};