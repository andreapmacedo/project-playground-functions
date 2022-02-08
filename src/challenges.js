// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;

}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

//Desafio 6
function highestCount(array) {
  let temp;
  let sum = 1;
  for (let index = 0; index < array.length; index++) {
    if (index == 0) {
      temp = array[0];
    } else if (array[index] >= temp) {
      if (array[index] > temp) {
        temp = array[index];
        sum = 1;
      } else {
        sum++;
      }
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if((cat2-mouse) === (mouse-cat1)){
    return 'os gatos trombam e o rato foge'
  }else if((cat2-mouse) < (cat1-mouse)){
    return 'cat2'
  }else {
    return 'cat1'
  }
}

// Desafio 8
function fizzBuzz(array) {  
  let result = [];
  let is3;
  let is5;
  for (let index in array) {
    is3 = false;
    is5 = false;
    if (array[index] % 3 == 0) {
      is3 = true;
    }
    if (array[index] % 5 == 0) {
      is5 = true;
    }

    if (is3 && is5) {
      result.push("fizzBuzz")
    } else if (!is3 && !is5) {
      result.push("bug!")
    } else if (is3) {
      result.push("fizz")
    } else if (is5) {
      result.push("buzz")
    }
  }
  return result;
}

// Desafio 9
function encode(param) {
  response = ''
  let string = param.split('')
  for (let i in string) {
    switch (string[i]) {
      case 'a':
        response = response + 1;
        break;
      case 'e':
        response = response + 2;
        break;
      case 'i':
        response = response + 3;
        break;
      case 'o':
        response = response + 4;
        break;
      case 'u':
        response = response + 5;
        break;
      default:
        response = response + string[i];
        break;
    }
  }
  return response;
}

function decode(param) {
  response = ''
  let string = param.split('')
  for (let i in string) {
    switch (string[i]) {
      case '1':
        response = response + 'a';
        break;
      case '2':
        response = response + 'e';
        break;
      case '3':
        response = response + 'i';
        break;
      case '4':
        response = response + 'o';
        break;
      case '5':
        response = response + 'u';
        break;
      default:
        response = response + string[i];
        break;
    }
  }
  return response;
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
