class PersonaJoven{
    constructor(data){
    this._id = data._id,
    this.IdEntidad= data.IdEntidad,
    this.IdTipoEducacion= data.IdTipoEducacion,
    this.IdPersona= data.IdPersona,
    this.Jornada= data.Jornada,
    this.Curso= data.Curso
    }
}

module.exports = PersonaJoven;