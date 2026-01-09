import { Field, ErrorMessage } from 'formik'

export const InputField = ({name, type = "text", placeholder="", label="", className="", as="", inputClassName="", children, ...props}) => (
    
    <div className={`flex flex-col gap-2 ${className}`}>
        {label && <label className='text-lighttext' htmlFor={name}>{label}</label>}
        <Field type={type} as={as} name={name} placeholder={placeholder} {...props} className={`text-lg placeholder:text-lighttext rounded-xl px-4 py-2 border-2 border-gray-200 bg-greybg text-darktext focus:outline-none focus:border-red_coral transition duration-200 ${inputClassName}`}>
            {children}
        </Field>
        <ErrorMessage name={name} component="div" className="text-red-600 text-sm" />
    </div>
)