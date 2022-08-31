function pulaLinha() {
    document.write("<br>")
}

function mostra(frase) {
    document.write(frase)
    pulaLinha()
}

var numeroPensado = Math.round(Math.random() * 10)
var tentativas = 1
while ( tentativas <= 3) {
    var chute = parseInt(prompt("Digite um numero qualquer!"))

    if(chute == numeroPensado) {
        mostra("Voce acertou! O numero pensado era" + numeroPensado)
        break;
    } else { 
        mostra("Voce errou!")
    }
    tentativas++
}

mostra("Fim")