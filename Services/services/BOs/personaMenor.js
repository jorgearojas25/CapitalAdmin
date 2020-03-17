class PersonaMenor {
  constructor(data) {
    (this._id = data._id),
      (this.IdEntidad = data.IdEntidad),
      (this.IdTipoEducacion = data.IdTipoEducacion),
      (this.IdPersona = data.IdPersona),
      (this.HistorialMedico = data.HistorialMedico);
  }
}

module.exports = PersonaMenor;