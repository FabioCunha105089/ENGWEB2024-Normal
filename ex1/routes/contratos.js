var express = require('express');
var router = express.Router();
var Contratos = require('../controllers/contrato')

router.get('/contratos', function(req, res, next) {
  if (req.query.entidade) {
    Contratos.listaContratosEntidade(req.query.entidade)
      .then(data => res.jsonp(data))
      .catch(erro => res.status(500).jsonp(erro));
  }else if (req.query.tipo) {
    Contratos.listaContratosTipo(req.query.tipo)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(500).jsonp(erro));
  }else {
      Contratos.listaContratos()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }

});

router.get('/contratos?entidade=:ent', function(req, res, next) {
  Contratos.listaContratosEntidade(req.params.ent)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/contratos?tipo=:tipo', function(req, res, next) {
  Contratos.listaContratosTipo(req.params.tipo)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/contratos/entidades', function(req, res, next) {
  Contratos.listaEntidades()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/contratos/tipos', function(req, res, next) {
  Contratos.listaTipos()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.post('/contratos', function(req, res) {
  Contratos.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.delete('/contratos/:id', function(req, res) {
  return Contratos.remove(req.params.id)
    .then(console.log("Deleted " + req.params.id))
    .catch(erro => res.jsonp(erro))
});

router.put('/contratos/:id', function(req, res) {
  Contratos.update(req.params.id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/contratos/:id', function(req, res, next) {
  Contratos.findContratoById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;
