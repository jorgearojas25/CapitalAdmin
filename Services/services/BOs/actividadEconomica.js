class ActividadEconomica{
    constructor(data){
        this.NombreTipoActividadEconomica = data.NombreTipoActividadEconomica,
        this.Activo= data.Activo,
        this._id = data._id
    }
}

module.exports = ActividadEconomica;