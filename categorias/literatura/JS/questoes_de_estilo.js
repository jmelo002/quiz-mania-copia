/*
    arquivo para interagir com elementos do arquivo questoes.html
*/

var alt1 = window.document.getElementById('alt1');
var alt2 = window.document.getElementById('alt2');
var alt3 = window.document.getElementById('alt3');
var alt4 = window.document.getElementById('alt4');


//ouvidores para mudar a cor do fundo do botão quando o mouse estiver dentro do botão
alt1.addEventListener('mouseenter', cordentro1);
alt2.addEventListener('mouseenter', cordentro2);
alt3.addEventListener('mouseenter', cordentro3);
alt4.addEventListener('mouseenter', cordentro4);

//ouvidores para mudar a cor do fundo do botão quando o mouse estiver fora do botão
alt1.addEventListener('mouseout', corfora1);
alt2.addEventListener('mouseout', corfora2);
alt3.addEventListener('mouseout', corfora3);
alt4.addEventListener('mouseout', corfora4);

//funções que mudando a cor do fundo do botão quando estão dentro e fora

function cordentro1(){
    alt1.style.background = '#F5DEB3';
}

function cordentro2(){
    alt2.style.background = '#F5DEB3';
}

function cordentro3(){
    alt3.style.background = '#F5DEB3';
}

function cordentro4(){
    alt4.style.background = '#F5DEB3';
}

function corfora1(){
    alt1.style.background = '#D3D3D3';
}

function corfora2(){
    alt2.style.background = '#D3D3D3';
}

function corfora3(){
    alt3.style.background = '#D3D3D3';
}

function corfora4(){
    alt4.style.background = '#D3D3D3';
}
