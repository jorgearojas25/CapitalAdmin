class TipoPersona{
    constructor(data){
        this.NombreTipoPersona= data.NombreTipoPersona,
        this.Activo= data.Activo,
        this._id = data._id
    }
}

module.exports = TipoPersona;