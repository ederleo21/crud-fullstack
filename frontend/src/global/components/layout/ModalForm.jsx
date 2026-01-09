
export const ModalForm = ({ isOpen, onClose, title = "Formulario", isSubmitting, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-poppins">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 flex flex-col gap-6 animate-fadeIn">
        
        <h2 className="text-2xl font-bold text-gray-800 font-lora text-center border-b pb-3">
          {title}
        </h2>

        <div className="overflow-y-auto max-h-[65vh] pr-1">
          {children}
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition font-medium"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-5 py-2 rounded-lg font-medium text-white transition 
              ${isSubmitting ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
          >
            {isSubmitting ? "Espere..." : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
};