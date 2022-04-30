/*
Estea arquivo faz os processos no arquivo filmes.html
*/ 

var pergunta = window.document.getElementById('questao');
var alternativas = window.document.getElementById('alternativas');
var totalPontos = 0;

function questoes(_alt = 0){
    var alt1 = window.document.getElementById('alt1').value;
    var alt2 = window.document.getElementById('alt2').value;
    var alt3 = window.document.getElementById('alt3').value;
    var alt4 = window.document.getElementById('alt4').value;

    if(alt1 == 'quest1' || alt2 == 'quest1' || alt3 == 'quest1' || alt4 == 'quest1'){
        totalPontos += _alt;
        pergunta.innerHTML = `<p id="txtPergunta">2 - Quantas cordas tem o violão ?</p>`;
        alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest2" onclick="questoes(0)">3</button></p>` +
        `<p><button type="button" id="alt2" value="quest2" onclick="questoes(0)">4</button></p>` +
        `<p><button type="button" id="alt3" value="quest2" onclick="questoes(0)">5</button></p>` +
        `<p><button type="button" id="alt4" value="quest2" onclick="questoes(1)">6</button></p>`;
    }else{
        if(alt1 == 'quest2' || alt2 == 'quest2' || alt3 == 'quest2' || alt4 == 'quest2'){
            totalPontos += _alt;
            pergunta.innerHTML = `<p id="txtPergunta">3 - Qual o nome da parte do violão que segura as cordas ?</p>`;
            alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest3" onclick="questoes(0)">Traste</button></p>` +
            `<p><button type="button" id="alt2" value="quest3" onclick="questoes(0)">Capotraste</button></p>` +
            `<p><button type="button" id="alt3" value="quest3" onclick="questoes(1)">Tarraxa</button></p>` +
            `<p><button type="button" id="alt4" value="quest3" onclick="questoes(0)">Afinador</button></p>`;
        }else{
            if(alt1 == 'quest3' || alt2 == 'quest3' || alt3 == 'quest3' || alt4 == 'quest3'){
                totalPontos += _alt;
                pergunta.innerHTML = `<p id="txtPergunta">4 - Qual peça muda o tom do violao sem trocar afinação?</p>`;
                alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest4" onclick="questoes(0)">Dedal</button></p>` +
                `<p><button type="button" id="alt2" value="quest4" onclick="questoes(1)">Capotraste</button></p>` +
                `<p><button type="button" id="alt3" value="quest4" onclick="questoes(0)">Tarraxa</button></p>` +
                `<p><button type="button" id="alt4" value="quest4" onclick="questoes(0)">Afinador</button></p>`;
            }else{
                if(alt1 == 'quest4' || alt2 == 'quest4' || alt3 == 'quest4' || alt4 == 'quest4'){
                    totalPontos += _alt;
                    pergunta.innerHTML = `<p id="txtPergunta">5 - Qual sigla representa o tempo da música?</p>`;
                    alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest5" onclick="questoes(1)">BPM</button></p>` +
                    `<p><button type="button" id="alt2" value="quest5" onclick="questoes(0)">CPM </button></p>` +
                    `<p><button type="button" id="alt3" value="quest5" onclick="questoes(0)">ATM</button></p>` +
                    `<p><button type="button" id="alt4" value="quest5" onclick="questoes(0)">DPM</button></p>`;
                }else{
                    if(alt1 == 'quest5' || alt2 == 'quest5' || alt3 == 'quest5' || alt4 == 'quest5'){
                        totalPontos += _alt;
                        pergunta.innerHTML = `<p id="txtPergunta">6 - Qual a frequencia mais aguda ?</p>`;
                        alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest6" onclick="questoes(1)">16Khz</button></p>` +
                        `<p><button type="button" id="alt2" value="quest6" onclick="questoes(0)">8Khz</button></p>` +
                        `<p><button type="button" id="alt3" value="quest6" onclick="questoes(0)">500Hz</button></p>` +
                        `<p><button type="button" id="alt4" value="quest6" onclick="questoes(0)">32Hz</button></p>`;
                    }else{
                        if(alt1 == 'quest6' || alt2 == 'quest6' || alt3 == 'quest6' || alt4 == 'quest6'){
                            totalPontos += _alt;
                            pergunta.innerHTML = `<p id="txtPergunta">7 - Qual instrumento é de percussão ?</p>`;
                            alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest7" onclick="questoes(0)">Piano</button></p>` +
                            `<p><button type="button" id="alt2" value="quest7" onclick="questoes(0)">Guitarra</button></p>` +
                            `<p><button type="button" id="alt3" value="quest7" onclick="questoes(0)">Violino</button></p>` +
                            `<p><button type="button" id="alt4" value="quest7" onclick="questoes(1)">Atabaque</button></p>`;
                        }else{
                            if(alt1 == 'quest7' || alt2 == 'quest7' || alt3 == 'quest7' || alt4 == 'quest7'){
                                totalPontos += _alt;
                                pergunta.innerHTML = `<p id="txtPergunta">8 - Qual a função da bateria na banda?</p>`;
                                alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest8" onclick="questoes(0)">Virada</button></p>` +
                                `<p><button type="button" id="alt2" value="quest8" onclick="questoes(0)">Grave</button></p>` +
                                `<p><button type="button" id="alt3" value="quest8" onclick="questoes(1)">Ritmo</button></p>` +
                                `<p><button type="button" id="alt4" value="quest8" onclick="questoes(0)">Batida</button></p>`;
                            }else{
                                if(alt1 == 'quest8' || alt2 == 'quest8' || alt3 == 'quest8' || alt4 == 'quest8'){
                                    totalPontos += _alt;
                                    pergunta.innerHTML = `<p id="txtPergunta">9 - Qual instrumento o maestro usa?</p>`;
                                    alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest9" onclick="questoes(1)">Batuta</button></p>` +
                                    `<p><button type="button" id="alt2" value="quest9" onclick="questoes(0)">Varinha</button></p>` +
                                    `<p><button type="button" id="alt3" value="quest9" onclick="questoes(0)">Barlo</button></p>` +
                                    `<p><button type="button" id="alt4" value="quest9" onclick="questoes(0)">Catuba</button></p>`;
                                }else{
                                    if(alt1 == 'quest9' || alt2 == 'quest9' || alt3 == 'quest9' || alt4 == 'quest9'){
                                        totalPontos += _alt;
                                        pergunta.innerHTML = `<div id="divQuestao10"><img src="../img/imagem_questao_10.jpeg" alt="Img_questao10" id="imgQuestao10"></div>` + 
                                        `<p id="txtPergunta">10 - Qual instrumento é este que aparece na imagem ?</p>`;
                                        alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest10" onclick="questoes(0)">Bumbo</button></p>` +
                                        `<p><button type="button" id="alt2" value="quest10" onclick="questoes(0)">Cabasa</button></p>` +
                                        `<p><button type="button" id="alt3" value="quest10" onclick="questoes(1)">Hang</button></p>` +
                                        `<p><button type="button" id="alt4" value="quest10" onclick="questoes(0)">Cowbell</button></p>`;
                                    }else{
                                        if(alt1 == 'quest10' || alt2 == 'quest10' || alt3 == 'quest10' || alt4 == 'quest10'){
                                            totalPontos += _alt;
                                            pergunta.innerHTML = `<strong id="pontos">${totalPontos}</strong>`;
                                            if(totalPontos == 0){
                                                alternativas.innerHTML = `<p id="mensagemPont">Mais sorte na próxima!</p>`;
                                            }else{
                                                if(totalPontos <= 4){
                                                    alternativas.innerHTML = `<p id="mensagemPont">Foi uma pontuação, mas não muito boa, que tal tentar de novo?</p>`;
                                                }else{
                                                    if(totalPontos >= 5 && totalPontos <= 7){
                                                        alternativas.innerHTML = `<p id="mensagemPont">Você conseguiu ótimos pontos, será que consegue ainda mais?</p>`;
                                                    }else{
                                                        if(totalPontos >=8 && totalPontos <= 9){
                                                            alternativas.innerHTML = `<p id="mensagemPont">Você obteve pontuações elevadas!</p>`;
                                                        }else{
                                                            if(totalPontos == 10){
                                                                alternativas.innerHTML = `<p id="mensagemPont"><strong id="parabens">PARABÉNS</strong>, você é um verdadeiro fã de música!</p>`;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/*
`<p><button type="button" id="alt1" value="quest" onclick="questoes()"></button></p>` +
            `<p><button type="button" id="alt2" value="quest" onclick="questoes()"></button></p>` +
            `<p><button type="button" id="alt3" value="quest" onclick="questoes()"></button></p>` +
            `<p><button type="button" id="alt4" value="quest" onclick="questoes()"></button></p>`;

`<p><button type="button" id="alt1" value="quest" onclick="questoes()"></button></p>` +
                `<p><button type="button" id="alt2" value="quest" onclick="questoes()"></button></p>` +
                `<p><button type="button" id="alt3" value="quest" onclick="questoes()"></button></p>` +
                `<p><button type="button" id="alt4" value="quest" onclick="questoes()"></button></p>`;

`<p id="txtPergunta"></p>`;
*/