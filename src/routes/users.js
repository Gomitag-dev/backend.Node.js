const { Router } = require("express");
const router = Router();
const { getUsers, getLeche } = require("../models/user");
const { faker } = require('@faker-js/faker');

router.get("/api/users", async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users); // Devuelve la lista de usuarios
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

router.get("/api/leche", async (req, res) => {
    try {
        const ust = await getLeche();
        res.json(ust); // Devuelve la lista de usuarios
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

// Ruta para crear usuarios
router.get("/api/users/create", async (req, res) => {
    try {
        for (let i = 0; i < 5; i++) {
            await createUser({
                name: faker.person.firstName(),
                description: faker.lorem.sentence(),
                quantity: faker.number.int({ min: 1, max: 100 }) // Asegúrate de especificar un rango
            });
        }
        res.json("5 usuarios creados");
    } catch (err) {
        res.status(500).json({ error: 'Error al crear usuarios', details: err.message });
    }
});

module.exports = router;
