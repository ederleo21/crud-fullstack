import api from "../../../services/api"

export const getListCarreras = async() => {
    const response = await api.get("/carrera/")
    return response.data
}

export const createCarrera = async(values) => {
    const response = await api.post("/carrera/", values)
    return response.data
}

export const updateCarrera = async(id, values) => {
    const response = await api.patch(`/carrera/${id}/`, values)
    return response.data
}

export const deleteCarrera = async(id) => {
    const response = await api.delete(`/carrera/${id}/`)
    return response.data
}