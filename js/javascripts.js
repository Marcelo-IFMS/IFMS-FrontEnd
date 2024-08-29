
var tamFont = 12;
function trocatexto(texto) {
    document.getElementById('dv3').innerHTML = texto;
}
function textoInput() {
    document.getElementById('dv2').innerHTML = document.getElementById('texto').value;
}
function trocaCor() {
    document.getElementById('dv3').style.color = document.getElementById('cor').value;
}
function aumentaFonte() {
    tamFont++;
    document.getElementById('dv3').style.fontSize = tamFont + 'px';
}
function reduzFonte() {
    tamFont--;
    document.getElementById('dv3').style.fontSize = tamFont + 'px';
}
function tamanhoFonte(condicao) {
    if (condicao == 'aumenta') {
        tamFont++;
        document.getElementById('dv3').style.fontSize = tamFont + 'px';
        return false;
    }
    if (condicao == 'reduz') {
        tamFont--;
        document.getElementById('dv3').style.fontSize = tamFont + 'px';
        return false;
    }
}
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
input.addEventListener("input", (event) => {
    value.textContent = input.value;
    console.log(event.target.value);
    document.getElementById('dv2').style.fontSize = event.target.value + 'px';
});

const elementoClick = document.getElementById("dv1");
elementoClick.addEventListener("click", (event) => {
    console.log(event.offsetX, event.offsetY);
});