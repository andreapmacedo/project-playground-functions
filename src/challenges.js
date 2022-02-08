// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;

}
// console.log(compareTrue(true, true))
// console.log(compareTrue(true, false))
// console.log(compareTrue(false, false))


// Desafio 2
function calcArea(base, height) {
  // let response;
  // response = (base * height)/2; 
  // return response;
  return (base * height) / 2;
}

// console.log(calcArea(10, 50))


// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// let arrayD4 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(arrayD4)); 


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// console.log(footballPoints(14, 8))

// Desafio 6
function highestCount(array) {
  let tempD6;
  let sumD6 = 1;
  for (let index = 0; index < array.length; index++) {
    if (index == 0) {
      tempD6 = array[0];
    } else if (array[index] >= tempD6) {
      // console.log(index);
      // console.log(index, array[index]);
      if (array[index] > tempD6) {
        tempD6 = array[index];
        sumD6 = 1;
      } else {
        sumD6++;
      }
    }
  }
  return sumD6;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount( [0, 0, 0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
