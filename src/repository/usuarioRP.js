import queryDB from "../helper/queryGenerator.js";


const consultaSQL = {

    listarUsuarios: async (parametros = [])=>{
        const respuesta = await queryDB("CALL listarUsuarios()", parametros);        
        return respuesta[0];
    },
    AgregarUsuario: async(parametros=[])=>{
        const respuesta = await queryDB("CALL AgregarUsuario(?,?,?)", parametros);
        return respuesta[0];
    },
    BuscarUsuario: async (parametros = [])=>{
        const respuesta = await queryDB("CALL ListarUsuarioPorNombre(?)", parametros);
        return  respuesta[0];
    },
    EliminarUsuario: async(parametros = [])=>{
        console.log(parametros)
        const respuesta = await queryDB("CALL EliminarUsuario(?)", parametros);
        console.log("respuesta del repositorio: ", respuesta)
        return respuesta[0];
    },
    ActualziarUsuario: async (parametros=[])=>{
        console.log("valor parametoes:",parametros);
        const respuesta = await queryDB("CALL ActualizarUsuarioPorId(?,?,?,?)", parametros);
        return respuesta[0];
    }
    

}

export default consultaSQL;