import axios from "axios";

const consultarToken = async (body) => {
    const semilla = "semilla123"
    const data = axios.post(`http://localhost:8081/API/v1.0/seguridad/autorizaciones/generar/${semilla}`, body).then(res => res.data);
    console.log(data);
    return data
}


// FACHADAS

export const consultarTokenFachada = async (body) => {
    return await consultarToken(body);
}