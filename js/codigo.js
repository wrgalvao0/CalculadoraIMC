let botao = document.getElementById("botao-calcular");
let botaoLimpar = document.getElementById('botao-limpar')
let container = document.querySelector('.container')
botao.addEventListener('click', () => {
    //verifica se ja existe um resultado impresso antes, caso exista, apaga para calcular e mostrar um novo em seguida
    let resultadoExistente = document.querySelector('p')
    if (resultadoExistente) {
        container.removeChild(resultadoExistente)
    }
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc = parseFloat(peso) / ((parseFloat(altura) * parseFloat(altura)))
    console.log(imc)
    let result = document.createElement('p')
    result.style.textAlign = 'center'
    result.style.marginTop = '10px'
    result.style.fontFamily = 'Arial, Helvetica, sans-serif'
    result.style.fontWeight = 'bold'

    if (imc < 18.5) {
        result.textContent = `Seu IMC é de ${imc.toFixed(2)}, situação de magreza`
        result.style.color = 'yellow'
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        result.textContent = `Seu IMC é de ${imc.toFixed(2)}, situação normal`
        result.style.color = 'green'
    }
    else if (imc >= 25 && imc <= 29.9) {
        result.textContent = `Seu IMC é de ${imc.toFixed(2)}, situação de sobrepeso`
        result.style.color = 'orange'
    }
    else if (imc >= 30 && imc <= 39.9) {
        result.textContent = `Seu IMC é de ${imc.toFixed(2)}, situação de obesidade`
        result.style.color = 'yellow'
    }
    else {
        result.textContent = `Seu IMC é de ${imc.toFixed(2)}, situação de obesidade grave`
        result.style.color = 'red'
    }
    container.appendChild(result)
})

botaoLimpar.addEventListener('click', () => {
    //apaga os valores dentro dos inputs
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
    //verifica se ja existe um resultado impresso, caso exista apaga
    let resultadoExistente2 = document.querySelector('p')
    if (resultadoExistente2) {
        container.removeChild(resultadoExistente2)
    }
})
