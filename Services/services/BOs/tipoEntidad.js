class TipoEntidad{
    constructor(data){
        this.NombreTipoEntidad= data.NombreTipoEntidad,
        this.Activo= data.Activo,
        this._id = data._id
    }
}

module.exports = TipoEntidad;