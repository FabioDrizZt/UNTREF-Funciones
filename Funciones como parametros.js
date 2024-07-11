const calculadora = (a, b, oper) => {
  // validar que a y b sean numeros
  if (isNaN(a) || isNaN(b)) {
    return 'Error: Debe ingresar un numero'
  }
  return oper(a, b)
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b

const nro1 = 7
const nro2 = 5
console.log(
  `La suma entre ${nro1} y ${nro2} es ${calculadora(nro1, nro2, suma)}`
)
console.log(
  `La resta entre ${nro1} y ${nro2} es ${calculadora(nro1, nro2, resta)}`
)

console.log(
  `La multiplicacion entre ${nro1} y ${nro2} es ${calculadora(
    nro1,
    nro2,
    multiplicacion
  )}`
)

console.log(
  `La division entre ${nro1} y ${nro2} es ${calculadora(nro1, nro2, division)}`
)
