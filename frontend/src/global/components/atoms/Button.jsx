export const Button = ({ text="texto", className="", type="button", ...props }) => {
  return (
    <div>
        <button 
            type={type} 
            className={`font-poppins text-lightbg font-semibold rounded-lg text-lg px-4 py-2 ${className}`}
            {...props}
        >
            {text}
        </button>
    </div>
  )
}