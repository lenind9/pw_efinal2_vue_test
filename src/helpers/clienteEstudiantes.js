import axios from "axios";

const consultarEstudiante = async (id) => {
    const data = axios.get(`http://localhost:8085/API/v1.0/Inscripcion/estudiantes/${id}`).then(res => res.data);
    console.log(data);
    return data;
}

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8085/API/v1.0/Inscripcion/estudiantes`, body).then(res => res.data);
    console.log(data);
}


// FACHADAS

export const consultarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}