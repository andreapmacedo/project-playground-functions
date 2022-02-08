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

function catAndMouse(cat1, cat2) {
  if (cat1 < cat2) {
    return 'cat2'
  } else if (cat2 < cat1) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}



// Desafio 8
function fizzBuzz(array) {
  // let div3 = [];
  // let div5 = [];
  let result = [];
  let is3;
  let is5;
  for (let index in array) {
    is3 = false;
    is5 = false;
    // console.log(array[index])
    if (array[index] % 3 == 0) {
      // div3.push(array[index]);
      is3 = true;
    }
    if (array[index] % 5 == 0) {
      // div5.push(array[index]);
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
  // console.log(div3)
  // console.log(div5)
  return result;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]))
// console.log(fizzBuzz([7, 9]))
// console.log(fizzBuzz([9, 25]))

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

// console.log(encode("hi there!"))
// console.log(decode(encode("hi there!")))

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
