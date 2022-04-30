/*
    arquivo para interagir com elementos do arquivo categoria2.html
*/

var voltar = window.document.getElementById('voltar');

voltar.addEventListener('mouseenter', voltarDentro);
voltar.addEventListener('mouseout', voltarFora);

function voltarDentro(){
    voltar.style.background = '#DC143C';
    voltar.style.color = 'white';
}

function voltarFora(){
    voltar.style.background = '#858585';
    voltar.style.color = 'black';
}