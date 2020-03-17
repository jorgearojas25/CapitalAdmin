const express = require('express');
const router = express.Router();
const controller = require('../2.business/historialMedicoController');
const response = require('../../network/response');
const config = require('../../config');

// Obtener todo, o filtrarlo 
router.get("/", (req, res) => {
    controller.GetHistorialMedico(req.body).then(data => 
        {
            response.success(req,res,data,200)
        }).catch(e => {
            response.error(req, res, `Error Interno`, 500, `${e}`)
        })
});

// Insertar uno
router.post("/", (req, res) => {
    controller.AddHistorialMedico(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res,`Error interno`, 500, `${e}`)
    });
});

router.post("/guardarLista", (req, res) => {
    controller.AddListHistorialMedico(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res, `Error interno`, 500, `${e}`)
    })
})

// Actualizar uno
router.patch("/", (req, res) => {
    controller.UpdateHistorialMedico(req.body).then(data => 
        {
            response.success(req, res, data, 200)
        }).catch(e => {
            response.error(req, res, `Error Interno`, 500, `${e}`)
        });
});

//Eliminar uno
router.delete("/:id", (req, res) => {
    controller.DeleteHistorialMedico(req.params.id).then(data => {
        response.success(req, res, data, 200)
    }).catch( e =>{
        response.error(req, res, `Error interno`, 500, `${e}`)
    })
});

module.exports =router;

