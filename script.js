var userInputArray = []
var divTracker = document.getElementById('informationBox')


function isNumber(n) {
  //numero nao atende minhas condicoes
  if(n < 1 || n > 100) {
    return false
  }
  //Numero atende
  else {
    return true
  }
}

function inList(number, lista){
  if (lista.indexOf(number) != -1){
    return true
  }
  else {
    return false
  }

}

function addUserInput() {
  let userInput = document.getElementById('userInput')
  let userInputNumber = Number(userInput.value)
  
  if (isNumber(userInputNumber) && !inList(userInputNumber, userInputArray)) {
     userInputArray.push(userInputNumber)
    // userInputArray.indexOf(userInputNumber) >= 0
    let newOption = document.createElement('option')
    document.getElementById('selectContainer').appendChild(newOption)
    newOption.innerText = `Número ${userInputNumber} adicionado` 
    userInput.value = ''
    userInput.focus()
    divTracker.innerHTML = ''
  }
  
  else {
    alert('Há algo de errado, reveja os dados')
  }
}

function userResults() {
  if (userInputArray.length == 0){
    alert('Adicione os números primeiro')
  }
  else{
    
    let newParagraph = document.createElement('p')
    document.getElementById('informationBox').appendChild(newParagraph)
    
    divTracker.innerHTML = `Há ${userInputArray.length} elementos cadastrados <br/>`
    divTracker.innerHTML += `O maior valor é ${Math.max(...userInputArray)}<br/>`
    divTracker.innerHTML += `O menor valor é ${Math.min(...userInputArray)}<br/>`
    var soma = 0
      for(let arrayKey = 0; arrayKey < userInputArray.length; arrayKey++) {
        var soma = soma + userInputArray[arrayKey]
      }
    divTracker.innerHTML += `A soma de todos os valores é ${soma}<br/>`
    divTracker.innerHTML += `A média de todos os valores é ${soma/userInputArray.length}`    
    
  }
}