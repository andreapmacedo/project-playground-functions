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
      if(sum >= 3){
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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
