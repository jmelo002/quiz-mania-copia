/*
    arquivo para interagir com elementos do arquivo creditos.html
*/

var gui = window.document.getElementById('guilherme');
var a1 = window.document.getElementById('a1');
var a2 = window.document.getElementById('a2');
var a3 = window.document.getElementById('a3');
var a4 = window.document.getElementById('a4');
var a5 = window.document.getElementById('a5');
var secreto;
var tentativas = 0;

//ouvidores para mudar cor das letras secretas
a1.addEventListener('click', corA1);
a2.addEventListener('click', corA2);
a3.addEventListener('click', corA3);
a4.addEventListener('click', corA4);
a5.addEventListener('click', corA5);

function codigo(seg = 0){
    secreto += seg;
    tentativas ++;

    if(tentativas <= 5){
        if(secreto == 10){
            //AQUI VAI O SEGREDO DO GUILHERME!!
            gui.innerHTML = `<strong id="segredoGui">Mango</strong>` +
            `<figure>
                <a href="https://instagram.com/eusouomango?utm_medium=copy_link"><img src="img/mango.jpg" alt="mango" id="mangoImg" /><a>
                <figcaption><i>Futuro tatuador</i></figcaption>
            </figure>`
        }else{
            if(tentativas == 5){
                secreto = 0;
                tentativas = 0;
                a1.style.color = 'black';
                a2.style.color = 'black';
                a3.style.color = 'black';
                a4.style.color = 'black';
                a5.style.color = 'black';
            }
        }
    }
}

// funções para mudar a cor das letras secretas ao serem clicadas

function corA1(){
    a1.style.color = '#9400D3';
}

function corA2(){
    a2.style.color = '#9400D3';
}

function corA3(){
    a3.style.color = '#9400D3';
}

function corA4(){
    a4.style.color = '#9400D3';
}

function corA5(){
    a5.style.color = '#9400D3';
}