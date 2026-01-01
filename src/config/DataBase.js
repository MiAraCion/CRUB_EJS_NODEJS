import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "prueba",
    user: "root",
    password:""
});

export default connection;