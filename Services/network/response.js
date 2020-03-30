class resultado{
  constructor(resultado, entidades, mensajes ){
    this.resultado = resultado,
    this.entidades = entidades,
    this.mensajes = mensajes
  }
}

exports.success = (req, res, response, status) => {
  
  let result = new resultado(true, response, [])
  res.status(status || 200).send(result);
};

exports.error = (req, res, exception, status,log) => {
  console.log(log)
  let result= new resultado(false, [], exception)
  res.status(status || 500).send(result);
};
