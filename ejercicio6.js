/*Ejercicio 6

Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.*/

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    console.error('Índices fuera de rango.')
    return array
  }

  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
  return array
}

//Ejemplos
console.log(swap(fantasticFour, 0, 3))
// Resultado: ['La cosa', 'Mr. Fantástico', 'La mujer invisible', 'La antorcha humana']

console.log(swap(fantasticFour, 1, 2))
// Resultado: ['La cosa', 'La mujer invisible', 'Mr. Fantástico', 'La antorcha humana']
