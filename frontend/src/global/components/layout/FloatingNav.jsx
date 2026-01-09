import { NavLink, useLocation } from 'react-router-dom';

export const FloatingNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg border-b border-gray-200 font-poppins z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <span className="text-lg text-gray-700 font-medium">
          Estás en: <strong className="text-blue-600">{currentPath}</strong>
        </span>

        <div className="flex gap-6">
          {currentPath !== "/" && (
            <NavLink
              to="/"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition transform hover:scale-105 text-base font-semibold"
            >
              🏠 Home
            </NavLink>
          )}

          {currentPath === "/" && (
            <>
              <NavLink
                to="/carreras"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition transform hover:scale-105 text-base font-semibold"
              >
                📚 Carreras
              </NavLink>
              <NavLink
                to="/modalidades"
                className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 text-base font-semibold"
              >
                🎓 Modalidades
              </NavLink>
            </>
          )}

          {currentPath === "/carreras" && (
            <NavLink
              to="/modalidades"
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition transform hover:scale-105 text-base font-semibold"
            >
              🎓 Ir a Modalidades
            </NavLink>
          )}

          {currentPath === "/modalidades" && (
            <NavLink
              to="/carreras"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition transform hover:scale-105 text-base font-semibold"
            >
              📚 Ir a Carreras
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};