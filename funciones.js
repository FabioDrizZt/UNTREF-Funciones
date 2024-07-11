const sumaExpresada = function (a, b = 0) {
  const suma = a + b
  return suma
}

const sumaArrowFunction = (a, b) => {
  const suma = a + b
  return suma
}

const sumaArrow = (a, b) => a + b

const nro1 = 3
const nro2 = 2
const resultado = sumaExpresada(nro1, nro2) // nro y nro2 son argumentos
console.log(`La suma es: ${resultado}`)
console.log(`La suma es: ${sumaArrowFunction(5, 7)}`)
console.log(`La suma es: ${sumaArrow(7, 7)}`)

function sumaDeclarada (a, b = 0) {
  // a y b son parametros
  const suma = a + b
  return suma
}

console.log(`La suma es: ${sumaDeclarada(5, 6)}`)
