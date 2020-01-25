var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {

    a.innerText = 'Clicou'
    a.style.background = 'red'
}

function entrar() {

    a.innerText = 'entrou'
    a.style.background = 'yellow'
}

function sair() {

    a.innerText = 'saiu'
    a.style.background = 'green'
}