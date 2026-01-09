import { toast } from "react-toastify"

//Helper para creacion  y actualizacion de recursos
export const handleFormSubmit = async({ requestFn, values, idSource=null, messageSuccess="Operación exitosa"}, actions) => {
    const { setErrors, setSubmitting } = actions;

    try{
        let res
        idSource ? res = await requestFn(idSource, values) : res = await requestFn(values)
        toast.success(messageSuccess);
        return { success: true, data: res }

    }catch(error){
        if (error.response && error.response.data){

            const data = error.response.data;
            setErrors(data);
            if (data.non_field_errors) {
                const message = Array.isArray(data.non_field_errors) ? data.non_field_errors.join(" ") : data.non_field_errors;
                toast.error(message);
            }
            if (data.error) toast.error(data.error)
            if (data.detail) toast.error(data.detail);
            
        } else {
            toast.error("Error inesperado. Intenta más tarde.");
        }
    }finally{
        setSubmitting(false);
    }
}