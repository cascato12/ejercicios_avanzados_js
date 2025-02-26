/*Ejercicio 5

Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()^*/
function rollDice(caras) {
  const randomNumber = Math.random()
  const diceResult = Math.floor(randomNumber * caras) + 1
  return diceResult
}

// Ejemplos
console.log(rollDice(8)) // Simula un dado de 8 caras (resultado entre 1 y 8)
console.log(rollDice(10)) // Simula un dado de 10 caras (resultado entre 1 y 10)
console.log(rollDice(20)) // Simula un dado de 20 caras (resultado entre 1 y 20)
