import { NavLink } from 'react-router-dom';

export const Home = () => {
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 font-poppins">
      <div className="text-center p-10 bg-white shadow-2xl rounded-2xl max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 font-lora tracking-wide">
          Bienvenido a tu Aplicación
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Gestiona carreras y modalidades de manera fácil, rápida y moderna.
        </p>

        <div className="flex justify-center gap-6">
          <NavLink
            to="/carreras"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105 font-semibold"
          >
            Ver Carreras
          </NavLink>
          <NavLink
            to="/modalidades"
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 font-semibold"
          >
            Ver Modalidades
          </NavLink>
        </div>

        <div className="mt-10 text-gray-500 text-sm">
          <p>© 2026 - Sistema Académico | Desarrollado por Eder</p>
        </div>
      </div>
    </div>
  );
};
