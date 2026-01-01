import connection from "../config/DataBase.js";
function queryDB(procedimiento, parametro = []){
    
    return new Promise((resolver, reject)=>{
        connection.query(procedimiento, parametro, function(error, resultado, fields){
            if(error){
                return reject(error);
            }
            if(resultado){
                return resolver(resultado);
            }
        })
    });

}


export default queryDB;