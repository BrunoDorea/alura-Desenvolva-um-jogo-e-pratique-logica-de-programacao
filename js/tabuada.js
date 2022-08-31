function pulaLinha() {
    document.write("<br>")
}

function mostra(frase) {
    document.write(frase)
    pulaLinha()
}

// multiplicador
for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {
    mostra(7 * multiplicador)
}
mostra ("Fim")