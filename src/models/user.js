const sql = require("mssql");

// Función para crear un nuevo producto
/*async function createUser(user) {
    try {
        const pool = await sql.connect({
            user: "Faz",
            password: "prueba123",
            server: "DESKTOP-IK49AMF",
            database: "PRUEBAS",
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        });
        console.log("Conexión a la base de datos establecida");
        
        const result = await pool.request()
            .input('name', sql.VarChar, user.name)
            .input('description', sql.VarChar, user.description)
            .input('quantity', sql.Int, user.quantity)
            .query('INSERT INTO Productos (name, description, quantity) VALUES (@name, @description, @quantity)');
        
        return result;
    } catch (err) {
        console.error('Error al crear el conductor:', err);
        throw err;
    }
}*/

// Función para obtener todos los usuarios
async function getUsers() { 
    try {
        const pool = await sql.connect({
            user: "CHILOLAC",
            password: "CHILOLAC",
            server: "190.13.149.210",
            database: "RECEPCION_2024",
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        });
        const result = await pool.request().query('SELECT * FROM [RECEPCION_2024].[dbo].[Conductor]');
        return result.recordset; // Devuelve los registros obtenidos
    } catch (err) {
        console.error('Error al obtener los conductores:', err);
        throw err;
    }
}

async function getLeche() { 
    try {
        const pool = await sql.connect({
            user: "CHILOLAC",
            password: "CHILOLAC",
            server: "190.13.149.210",
            database: "RECEPCION_2024",
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        });
        const result = await pool.request().query('SELECT * FROM [RECEPCION_2024].[dbo].[ProdEstDet]');
        return result.recordset; // Devuelve los registros obtenidos
    } catch (err) {
        console.error('Error al obtener los conductores:', err);
        throw err;
    }
}


module.exports = { getUsers, getLeche }; // Exporta las funciones para su uso en otros archivos
