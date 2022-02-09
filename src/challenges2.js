// Desafio 11
function countRepeated(array) {
  newArray = array;
  newArray = newArray.slice().sort();
  current = 0;
  sum = 1;
  for (let index = 0; index < newArray.length; index++) {
    if (index == 0) {
      current = newArray[0];
    } else if (current == newArray[index]) {
      current = newArray[index];
      sum++;
      if (sum >= 3) {
        return true;
      }
    } else {
      current = newArray[index];
      sum = 1;
    }
  }
  return false;
}

function generatePhoneNumber(phoneNumber) {
  response = '(';
  if (phoneNumber.length != 11) {
    return "Array com tamanho incorreto."
  } else {
    if (countRepeated(phoneNumber)) {
      return "não é possível gerar um número de telefone com esses valores"
    } else {
      for (let index in phoneNumber) {
        if (phoneNumber[index] > 9 || phoneNumber[index] < 0) {
          return "não é possível gerar um número de telefone com esses valores"
        } else {
          if (index == 2) {
            response += ') ' + phoneNumber[index];
          } else if (index == 7) {
            response += '-' + phoneNumber[index];
          } else {
            response += phoneNumber[index]
          }
        }
      }
      return response;
    }
  }
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {  
  let sides = [lineA, lineB, lineC];
  let othersSides = [];
  let minSide = Math.min(lineA,lineB,lineC);
  let sum = 0;
  let result = false;
  console.log(minSide)
  for(let index in sides){
    if(sides[index] !== minSide){
      othersSides.push(sides[index])
      sum += sides[index];
    }
  }
  if (minSide < sum && minSide > Math.abs(othersSides[0]-othersSides[1])){
    result = true;
  }
  return result
}

// Desafio 13
function hydrate(sentence) {
  let fSentence = sentence.split(',');
  let sSentence = []; 
  let newSentence = [];
  let pattern = /[1-9]/g;
  let sum = 0;
  for(let index in fSentence){ 
    sSentence = fSentence[index].split(' e');
  }
  fSentence.pop();
  newSentence = fSentence.concat(sSentence);
  for(let index in newSentence){
    sum += parseFloat(newSentence[index].match(pattern))
  }
  if(sum === 1){
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  }
}
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
