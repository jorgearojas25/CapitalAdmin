class Familia{
    constructor(data){
    this.NombreFamilia = data.NombreFamilia,
    this.Calle= data.Calle,
    this.Numero= data.Numero,
    this.Telefono= data.Telefono,
    this.IdTipoVivienda= data.IdTipoVivienda,
    this.IdBarrio= data.IdBarrio,
    this.IngresoFamiliar= data.IngresoFamiliar,
    this._id = data._id
    }
}

module.exports = Familia;