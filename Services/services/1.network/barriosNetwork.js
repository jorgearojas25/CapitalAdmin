const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const config = require('../../config');

// Obtener todo, o filtrarlo 
router.get("/", (req, res) => {

});

// Insertar uno
router.post("/", (req, res) => {

});

// Actualizar uno
router.patch("/:id", (req, res) => {

});

//Eliminar uno
router.delete("/:id", (req, res) => {

});

module.exports =router;

