const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PHONE_PATTERN = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/

const orderRests = ( data ) => {
  const allRests = []
  data.map( e => (allRests.push(e.node.nombre)))
  return allRests
}

const orderGroupRests = ( dataGroup, groupRest, ) => {
  const allRests = []
  dataGroup.map( e => (allRests.push(e.node.nombre)))
  const firstRest = allRests.filter(rest => rest === groupRest)
  const nextRests = allRests.filter(rest => rest !== groupRest)
  return [ ...firstRest, ...nextRests ]
}


const validators = {
  email: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un email"
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "*Es necesario introducir un email válido"
    }
    return message
  },
  name: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un nombre"
    }
    return message
  },
  phone: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un teléfono"
    } else if (!PHONE_PATTERN.test(value)) {
      message = "*El teléfono debe ser válido"
    }
    return message
  },
  message: value => {
    let message
    if (!value) {
      message = "*Es necesario introducir un mensaje"
    }
    return message
  },
  legal: value => {
    let message
    if (value !== true) {
      message = "*Es necesario aceptar la política de privacidad"
    }
    return message
  },
}

export { validators,  orderGroupRests, orderRests }
