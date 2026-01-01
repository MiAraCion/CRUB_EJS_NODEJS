import consultaSQL from "../repository/usuarioRP.js";

const service = {

    ListarUsuario: async ()=>{
        const respuesta  = await consultaSQL.listarUsuarios([]);
        return respuesta;
        
    },
    AgregarUsuario: async({nombre, correo, ubicacion})=>{
        const respuesta = await consultaSQL.AgregarUsuario([nombre, correo, ubicacion]);
        return respuesta;
    }


};

export default service;