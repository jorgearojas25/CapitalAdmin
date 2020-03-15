const express = require('express');
const router = express.Router();
const controller = require('../2.business/entidadController');
const response = require('../../network/response');
const config = require('../../config');

// Obtener todo, o filtrarlo 
router.get("/", (req, res) => {
    controller.GetEntidad(req.body).then(data => 
        {
            response.success(req,res,data,200)
        }).catch(e => {
            response.error(req, res, `Error Interno`, 500, `${e}`)
        })
});

// Insertar uno
router.post("/", (req, res) => {
    controller.AddEntidad(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res,`Error interno`, 500, `${e}`)
    });
});

router.post("/guardarLista", (req, res) => {
    controller.AddListEntidad(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res, `Error interno`, 500, `${e}`)
    })
})

// Actualizar uno
router.patch("/", (req, res) => {
    controller.UpdateEntidad(req.body).then(data => 
        {
            response.success(req, res, data, 200)
        }).catch(e => {
            response.error(req, res, `Error Interno`, 500, `${e}`)
        });
});

//Eliminar uno
router.delete("/:id", (req, res) => {
    controller.DeleteEntidad(req.params.id).then(data => {
        response.success(req, res, data, 200)
    }).catch( e =>{
        response.error(req, res, `Error interno`, 500, `${e}`)
    })
});

module.exports =router;

