import api from "../../../services/api"

export const getListModalidad = async() => {
    const response = await api.get("/modalidad/")
    return response.data
}

export const createModalidad = async(values) => {
    const response = await api.post("/modalidad/", values)
    return response.data
}

export const updateModalidad = async(IdSource, values) => {
    const response = await api.patch(`/modalidad/${IdSource}/`, values)
    return response.data
}

export const deleteModalidad = async(id) => {
    const response = await api.delete(`/modalidad/${id}/`)
    return response.data
}