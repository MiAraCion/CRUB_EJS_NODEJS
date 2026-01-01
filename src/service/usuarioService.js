import consultaSQL from "../repository/usuarioRP.js";

const service = {

    ListarUsuario: async ()=>{
        const respuesta  = await consultaSQL.listarUsuarios([]);
        return respuesta;
    },
    AgregarUsuario: async({nombre, correo, ubicacion})=>{
        const respuesta = await consultaSQL.AgregarUsuario([nombre, correo, ubicacion]);
        return respuesta;
    },
    BuscarPorNombre: async({nombre})=>{
        const respuesta = await consultaSQL.BuscarUsuario([nombre]);
        return respuesta;
    },
    ActualizarPorId: async({id, nombre, correo, ubicacion})=>{
        const respuesta = await consultaSQL.ActualziarUsuario([id, nombre, correo, ubicacion])
        return respuesta;
    },
    EliminarPorID: async({id})=>{
        console.log("valor del id : ", id)
        const respuesta = await consultaSQL.EliminarUsuario([id])
        console.log("respuesta del service: ", respuesta)
        return respuesta;
    }
};

export default service;