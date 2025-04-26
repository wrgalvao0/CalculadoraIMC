let botao = document.getElementById("botao-calcular");
let botaoLimpar = document.getElementById('botao-limpar')
botao.addEventListener('click', () => {
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc = parseFloat(peso) / ((parseFloat(altura) * parseFloat(altura)))
    console.log(imc)
})

botaoLimpar.addEventListener('click', () => {
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
})
