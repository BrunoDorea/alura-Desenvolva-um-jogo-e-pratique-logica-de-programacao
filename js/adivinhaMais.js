var segredo = Math.round(Math.random() * 10)
var input = document.querySelector("input")
input.focus()


function verifica() {
    if (input.value == segredo) {
        alert("Voce acertou")
    } else {
        alert("Voce errou")
    }
    input.value = ""
    input.focus()
}
var button = document.querySelector("button")
button.onclick = verifica