var pergunta = window.document.getElementById('pesguntaDescri');
var alternativas = window.document.getElementById('questoes');
var pontosTotal = 0;

function questoes(_alt = 0){
    var alt1 = window.document.getElementById('alt1').value;
    var alt2 = window.document.getElementById('alt2').value;
    var alt3 = window.document.getElementById('alt3').value;
    var alt4 = window.document.getElementById('alt4').value;

    if(alt1 == 'quest1' || alt2 == 'quest1' || alt3 == 'quest1' || alt4 == 'quest1'){
        pontosTotal += _alt;
        pergunta.innerHTML = `2 - Quantos medos Tris tem em Convergente?`;
        alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest2" onclick="questoes(0)">8</button></p>` +
        `<p><button type="button" id="alt2" value="quest2" onclick="questoes(1)">6</button></p>` +
        `<p><button type="button" id="alt3" value="quest2" onclick="questoes(0)">5</button></p>` +
        `<p><button type="button" id="alt4" value="quest2" onclick="questoes(0)">4</button></p>` +
        `Total de Pontos: ${pontosTotal}`;
    }
}

//<p><button type="button" id="alt2" value="quest2" onclick="questoes()"></button></p>