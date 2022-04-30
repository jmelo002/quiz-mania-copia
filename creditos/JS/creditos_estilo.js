/*
    arquivo para interagir com elementos do arquivo creditos.html
*/

var voltar = window.document.getElementById('voltar');
var secreto = window.document.getElementById('secreto');


//ouvidores para mudar a cor do fundo do botão quando o mouse estiver dentro do botão
voltar.addEventListener('mouseenter', dentro);
//ouvidores para mudar a cor do fundo do botão quando o mouse estiver fora do botão
voltar.addEventListener('mouseout', fora);

//funções que mudando a cor do fundo do botão quando estão dentro e fora
function dentro(){
    voltar.style.background = '#1C1C1C';
    voltar.style.color = 'white';
}

function fora(){
    voltar.style.background = 'white';
    voltar.style.color = 'black';
}