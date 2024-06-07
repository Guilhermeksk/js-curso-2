let numeroSorteado = sorte();
let tentativas = 1;
let ortografia = numeroSorteado > 1 ? "tentativas" : "tentativa";
let chute = document.querySelector("input");
function camposValidos(a, texto) {
  let campo = document.querySelector(a);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

camposValidos("h1", "hora do desafio alek");

function verificarChute() {
  let chuteValor = chute.value;

  if (chuteValor == numeroSorteado) {
    camposValidos("h1", "Acertou!!");
    camposValidos("p",`Parabens vc acertou o numero sorteado em ${tentativas} ${ortografia}.`);
    limparCampo();
    document.getElementById("reiniciar").removeAttribute("disabled");
    chute.setAttribute("disabled", true);

  } else {
    if (chuteValor > numeroSorteado) {
      camposValidos("p", "numero sorteado é menor.");
    } else {
      camposValidos("p", "numero sorteado é maior.");
    }
    tentativas++;
  }
}

function sorte() {
    return parseInt(Math.random() * 10 + 1);
    }

function limparCampo() {
    chute.value = "";
}

function reiniciar(){
camposValidos("h1", "hora do desafio alek");
camposValidos("p","Escolha um número entre 1 a 10");
    numeroSorteado = sorte();
    console.log(numeroSorteado);
    document.getElementById("reiniciar").setAttribute("disabled", true);
    chute.removeAttribute("disabled");


}

