function addbola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 1200);
    var p2 = Math.floor(Math.random() * 500);

    //cor aleatoria das bolas
    var cor = parseInt(Math.random() * 999999);
    bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;background-color:#" + cor);

    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

// funcao que estoura os elementos
function estourar(elemento) {
    document.body.removeChild(elemento);
}
// funcao que da inicio a tudo
function iniciar() {
    setInterval(addbola, 500);

}