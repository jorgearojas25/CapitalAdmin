const express = require('express');
const router = express.Router();
const controller = require('../2.business/Data/PersonasDataController');
const response = require('../../network/response');
const config = require('../../config');

// Obtener todo, o filtrarlo 
router.get("/CantidadPersonas", (req, res) => {
    controller.GetNumeroPersonasPorTipo(req.body).then(data => 
        {
            response.success(req,res,data,200)
        }).catch(e => {
            response.error(req, res, `Error Interno`, 500, `${e}`)
        })
});

module.exports =router;

