const express = require('express');
const router = express.Router();
const controller = require('../2.business/tipoBarrioController');
const response = require('../../network/response');
const config = require('../../config');

// Obtener todo, o filtrarlo 
router.get("/", (req, res) => {
    
});

// Insertar uno
router.post("/", (req, res) => {
    controller.AddTipoBarrio(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res,`Error interno`, 500, `${e}`)
    });
});

// Actualizar uno
router.patch("/", (req, res) => {

});

//Eliminar uno
router.delete("/:id", (req, res) => {

});

module.exports =router;

