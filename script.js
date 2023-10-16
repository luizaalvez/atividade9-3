var imgAmarelo = "robotron-amarelo.png"
var imgRosa = "robotron-rosa.png"
var imgBranco = "robotron-branco.png"
var imgPreto = "robotron-preto.png"
var imgAzul = "robotron-azul.png"
var imgVerme = "robotron-vermelho.png"

function myFunction() {
    document.getElementById("myImage").src= imgAzul;
    let cor = imgAzul;
    imgAzul = imgRosa;
    imgRosa = imgVerme;
    imgVerme = imgPreto;
    imgPreto = imgBranco;
    imgPreto = imgAmarelo;
    imgAmarelo = cor;

}

function voltarCor(){
    let volta = myFunction();
}