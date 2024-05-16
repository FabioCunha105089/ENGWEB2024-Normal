const mongoose = require('mongoose')
var Contrato = require("../models/contrato")

module.exports.listaContratos = () => {
  return Contrato
      .find()
      .sort({_id : 1})
      .exec()
}

module.exports.findContratoById = id => {
  return Contrato
      .findOne({_id : id})
      .exec()
}

module.exports.listaContratosEntidade = entidade => {
  return Contrato
      .find({ entidade_comunicante: entidade })
      .exec()
}

module.exports.listaContratosTipo = tipo => {
  return Contrato
      .find({ tipoprocedimento: tipo })
      .exec()
}

module.exports.listaEntidades = () => {
  return Contrato
    .distinct('entidade_comunicante')
    .sort({ entidade_comunicante: 1 })
    .exec();
}

module.exports.listaTipos = () => {
  return Contrato
    .distinct('tipoprocedimento')
    .sort({ tipoprocedimento: 1 })
    .exec();
}

module.exports.insert = contrato => {
  if((Contrato.find({_id : contrato._id}).exec()).length != 1){
      var newContrato = new Contrato(contrato)
      return newContrato.save()
  }
}

module.exports.update = (id, contrato) => {
  return Contrato
      .findByIdAndUpdate(id, contrato, {new : true})
}

module.exports.remove = id => {
  return Contrato
      .findOneAndDelete({_id : id})
}