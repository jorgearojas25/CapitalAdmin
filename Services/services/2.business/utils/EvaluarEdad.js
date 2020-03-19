const EnumPersonas = require("../enums/TipoPersonaEnum");

function calculateAge(birthday) {
  let trimBirth = birthday.split('T');
  var birthday_arr = trimBirth[0].split("-");
  var birthday_date = new Date(
    birthday_arr[0],
    birthday_arr[1] - 1,
    birthday_arr[2]
  );
  console.log(birthday_arr);
  var ageDifMs = Date.now() - birthday_date.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function evaluarTipoPersona(birthday) {
  let edad = calculateAge(birthday);
  console.log(edad);
  let respuesta = 0;

  if (edad > 0 && edad < 7) {
      //console.log(`Menor ${edad}`)
    respuesta = EnumPersonas.PersonaMenor;
  } else {
    if (edad >= 7 && edad < 18) {
        //console.log(`Joven ${edad}`)
      respuesta = EnumPersonas.PersonaJoven;
    } else {
      if (edad >= 18) {
        //console.log(`mayor ${edad}`)
        respuesta = EnumPersonas.PersonaMayor;
      } else {
        respuesta = "No se puede calcular";
      }
    }
  }

  return respuesta;
}

module.exports = evaluarTipoPersona;
