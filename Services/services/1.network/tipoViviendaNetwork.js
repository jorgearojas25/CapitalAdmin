const express = require('express');
const router = express.Router();
const controller = require('../2.business/tipoViviendaController');
const response = require('../../network/response');
const config = require('../../config');

// Obtener todo, o filtrarlo 
router.get("/", (req, res) => {
    controller.GetTipoVivienda(req.body).then(data => 
        {
            response.success(req,res,data,200)
        }).catch(e => {
            response.error(req, res, `Error Interno`, 500, `${e}`)
        })
});

// Insertar uno
router.post("/", (req, res) => {
    controller.AddTipoVivienda(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res,`Error interno`, 500, `${e}`)
    });
});

router.post("/guardarLista", (req, res) => {
    controller.AddListTipoVivienda(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res, `Error interno`, 500, `${e}`)
    })
})

// Actualizar uno
router.patch("/", (req, res) => {
    controller.UpdateTipoVivienda(req.body).then(data => 
        {
            response.success(req, res, data, 200)
        }).catch(e => {
            response.error(req, res, `Error Interno`, 500, `${e}`)
        });
});

//Eliminar uno
router.delete("/:id", (req, res) => {
    controller.DeleteTipoVivienda(req.params.id).then(data => {
        response.success(req, res, data, 200)
    }).catch( e =>{
        response.error(req, res, `Error interno`, 500, `${e}`)
    })
});

module.exports =router;

