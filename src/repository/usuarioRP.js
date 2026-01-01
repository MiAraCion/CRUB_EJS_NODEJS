import queryDB from "../helper/queryGenerator.js";


const consultaSQL = {

    listarUsuarios: async (parametros)=>{
        const respuesta = await queryDB("CALL listarUsuarios()", parametros);        
        return respuesta[0];
    },
    AgregarUsuario: async(parametros=[])=>{
        const respuesta = await queryDB("CALL AgregarUsuario(?,?,?)", parametros);
        return respuesta[0];
    }

}

export default consultaSQL;