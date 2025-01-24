const mssql = require("mssql");

async function connect() {
    try {
        await mssql.connect({
            user: "CHILOLAC",
            password: "CHILOLAC",
            server: "190.13.149.210",
            database: "RECEPCION_2024",
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        });
        console.log("Database connected");
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

module.exports = { connect };
