class Persona {
  constructor(data) {
    (this._id = data._id),
    (this.IdFamilia = data.IdFamilia),
    (this.IdTipoPersona = data.IdTipoPersona),
    (this.FechaDeNacimiento = data.FechaDeNacimiento),
    (this.LugarDeNacimiento = data.LugarDeNacimiento),
    (this.PrimerNombre = data.PrimerNombre),
    (this.SegundoNombre = data.SegundoNombre),
    (this.PrimerApellido = data.PrimerApellido),
    (this.SegundoApellido = data.SegundoApellido),
    //PROPS NEGOCIO
    (this.TipoPersona = data.TipoPersona) 
  }
}

module.exports = Persona;
