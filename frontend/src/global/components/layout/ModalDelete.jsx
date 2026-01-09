
export const ModalDelete = ({ onClose, onConfirm, title, children }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      
      <div className="relative w-full max-w-md p-6">
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Cerrar modal</span>
          </button>

          <div className="flex flex-col items-center text-center p-6 gap-4">
            
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
              <svg
                className="w-8 h-8 text-red-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 font-poppins">
              {title}
            </h3>

            {children && (
              <p className="text-gray-600 text-base leading-relaxed font-poppins">
                {children}
              </p>
            )}

            <div className="flex gap-4 mt-4 w-full justify-center">
              <button
                onClick={onConfirm}
                className="flex-1 py-3 px-5 bg-red-600 text-white font-poppins rounded-xl hover:bg-red-700 transition"
              >
                Sí, eliminar
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 px-5 border border-gray-300 bg-white text-gray-800 rounded-xl font-poppins hover:bg-gray-100 transition"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};