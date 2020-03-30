class TipoEducacion{
    constructor(data){
        this.NombreTipoEducacion= data.NombreTipoEducacion,
        this.Activo= data.Activo,
        this._id = data._id
    }
}

module.exports = TipoEducacion;