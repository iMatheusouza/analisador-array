var userInputArray = []

function adicionar() {
  let userInputValue = Number(document.getElementById('userInput').value)
  userInputArray.push(userInputValue)
  if (userInputValue > 100 || userInputValue < 1 || userInputValue.length == 0) {
    alert('Há algo de errado, reveja os dados')
  }
  
  else {
    var newOption = document.createElement('option')
    document.getElementById('selectContainer').appendChild(newOption)
    newOption.innerText = userInputValue

  }
  
}

function finalizar() {
  // console.log(userInputArray)
  var newParagraph = document.createElement('p')
  document.getElementById('informationBox').appendChild(newParagraph)

    

    newParagraph.innerHTML = `Há ${userInputArray.length} elementos cadastrados <br/>`
    // console.log(`Há ${userInputArray.length} cadastrados`)
    newParagraph.innerHTML = newParagraph.innerHTML + `O maior valor é ${Math.max(...userInputArray)}<br/>`
    // console.log('O maior valor é', Math.max(...userInputArray))
    newParagraph.innerHTML = newParagraph.innerHTML + `O menor valor é ${Math.min(...userInputArray)}<br/>`
    // console.log('O menor valor é', Math.min(...userInputArray))
    var soma = 0
      for(let a = 0; a < userInputArray.length; a++) {
        var soma = soma + userInputArray[a]
      }
    newParagraph.innerHTML = newParagraph.innerHTML + `A soma de todos os valores é ${soma}<br/>`
    // console.log('a soma de todos os valores é de', soma)
    newParagraph.innerHTML = newParagraph.innerHTML + `A média de todos os valores é ${soma/userInputArray.length}`
    // console.log('a média dos valores é de', soma/userInputArray.length)
    
}
