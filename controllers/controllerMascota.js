//const modelEstudiante = require('../models/estudianteModel');
const db = require('../models/database');
/** Obtiene todos los estudiantes */
exports.odtenerMascotas = async (req, res, next) => {
    try {

        const estudiantes = await db.query('SELECT * FROM mascota');
        res.json(estudiantes);

    } catch (error) {
        console.log(error);
        next();
    }
}

