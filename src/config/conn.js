const mysql = require('mysql2');
require('dotenv').config();
/*
 * Creamos un pool de conexiones
 */

const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password:process.env.DBPASS,
  database: process.env.DBNAME,
  port:process.env.DBPORT,
  waitForConnections: true,//esta esperando por conecciones
  connectionLimit: 10,//maximo de cpneciones
  queueLimit: 0,//infinitas
});

/**
 * Testeamos que la conexión sea exitosa
 este es un colback para errores*/

pool.getConnection((error, conn) => {
  if (error) {
    console.error('Error al obtener una conexión:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
    conn.release();//libera la conexion
  }
});
//esta coneccion nos va apermitir usar promesas con asyn y away
module.exports = {
  conn: pool.promise()
};
