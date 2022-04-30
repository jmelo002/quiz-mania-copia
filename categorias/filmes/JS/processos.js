/*
    arquivo faz os processos do arquivo filmes_geral.html
*/

var pergunta = window.document.getElementById('questao');
var alternativas = window.document.getElementById('alternativas');
totalPontos = 0;

function questoes(_alt = 0){
    var alt1 = window.document.getElementById('alt1').value;
    var alt2 = window.document.getElementById('alt2').value;
    var alt3 = window.document.getElementById('alt3').value;
    var alt4 = window.document.getElementById('alt4').value;

    if(alt1 == 'quest1' || alt2 == 'quest1' || alt3 == 'quest1' || alt4 == 'quest1'){
        totalPontos += _alt;
        pergunta.innerHTML = `<p id="txtPergunta">2 - Qual é o jogo do Ralph?</p>`;
        alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest2" onclick="questoes(0)">Missão de Herói</button></p>` +
        `<p><button type="button" id="alt2" value="quest2" onclick="questoes(0)">Corrida Doce</button></p>` +
        `<p><button type="button" id="alt3" value="quest2" onclick="questoes(1)">Conserta Felix Jr.</button></p>` +
        `<p><button type="button" id="alt4" value="quest2" onclick="questoes(0)">Donkey Kong</button></p>`;
    }else{
        if(alt1 == 'quest2' || alt2 == 'quest2' || alt3 == 'quest2' || alt4 == 'quest2'){
            totalPontos += _alt;
            pergunta.innerHTML = `<p id="txtPergunta">3 - Qual o nome da cidade onde se passa o filme do MegaMente?</p>`;
            alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest3" onclick="questoes(0)">Hollywood</button></p>` +
            `<p><button type="button" id="alt2" value="quest3" onclick="questoes(0)">Nova York</button></p>` +
            `<p><button type="button" id="alt3" value="quest3" onclick="questoes(0)">Mitrucity</button></p>` +
            `<p><button type="button" id="alt4" value="quest3" onclick="questoes(1)">Metrocity</button></p>`;
        }else{
            if(alt1 == 'quest3' || alt2 == 'quest3' || alt3 == 'quest3' || alt4 == 'quest3'){
                totalPontos += _alt;
                pergunta.innerHTML = `<p id="txtPergunta">4 - O fiel assistente de Megamente é:</p>`;
                alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest4" onclick="questoes(1)">Criado</button></p>` +
                `<p><button type="button" id="alt2" value="quest4" onclick="questoes(0)">Titan</button></p>` +
                `<p><button type="button" id="alt3" value="quest4" onclick="questoes(0)">Bernard</button></p>` +
                `<p><button type="button" id="alt4" value="quest4" onclick="questoes(0)">Metro Man</button></p>`;
            }else{
                if(alt1 == 'quest4' || alt2 == 'quest4' || alt3 == 'quest4' || alt4 == 'quest4'){
                    totalPontos += _alt;
                    pergunta.innerHTML = `<p id="txtPergunta">5 - Меgаmеntе ѕе раѕѕа реlо fахіnеіrо оndе еѕtá lосаlіzаdа а еѕtátuа dе Меtrо-Маn, е арrоvеіtа раrа ѕеduzіr Rоѕаnе. Quаl о nоmе dеѕѕе fахіnеіrо?</p>`;
                    alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest5" onclick="questoes(0)">Веrnаrdо</button></p>` +
                    `<p><button type="button" id="alt2" value="quest5" onclick="questoes(1)">Bernard</button></p>` +
                    `<p><button type="button" id="alt3" value="quest5" onclick="questoes(0)">Сrіаdо</button></p>` +
                    `<p><button type="button" id="alt4" value="quest5" onclick="questoes(0)">Hal Stewart</button></p>`;
                }else{
                    if(alt1 == 'quest5' || alt2 == 'quest5' || alt3 == 'quest5' || alt4 == 'quest5'){
                        totalPontos += _alt;
                        pergunta.innerHTML = `<p id="txtPergunta">6 - No filme era do gelo, qual o nome do mamute do filme?</p>`;
                        alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest6" onclick="questoes(0)">Luid</button></p>` +
                        `<p><button type="button" id="alt2" value="quest6" onclick="questoes(1)">Manny</button></p>` +
                        `<p><button type="button" id="alt3" value="quest6" onclick="questoes(0)">Malle</button></p>` +
                        `<p><button type="button" id="alt4" value="quest6" onclick="questoes(0)">Billy</button></p>`;
                    }else{
                        if(alt1 == 'quest6' || alt2 == 'quest6' || alt3 == 'quest6' || alt4 == 'quest6'){
                            totalPontos += _alt;
                            pergunta.innerHTML = `<p id="txtPergunta">7 - Sid, um personagem do filme "a era do gelo", é qual animal?</p>`;
                            alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest7" onclick="questoes(0)">Uma ratazana</button></p>` +
                            `<p><button type="button" id="alt2" value="quest7" onclick="questoes(0)">Um esquilo</button></p>` +
                            `<p><button type="button" id="alt3" value="quest7" onclick="questoes(1)">Uma preguiça</button></p>` +
                            `<p><button type="button" id="alt4" value="quest7" onclick="questoes(0)">Um gambá</button></p>`;
                        }else{
                            if(alt1 == 'quest7' || alt2 == 'quest7' || alt3 == 'quest7' || alt4 == 'quest7'){
                                totalPontos += _alt;
                                pergunta.innerHTML = `<p id="txtPergunta">8 - Quantos filhos o Shrek tem?</p>`;
                                alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest8" onclick="questoes(1)">Três, dois meninos e uma menina</button></p>` +
                                `<p><button type="button" id="alt2" value="quest8" onclick="questoes(0)">Quatro, três meninos e uma menina</button></p>` +
                                `<p><button type="button" id="alt3" value="quest8" onclick="questoes(0)">Dois, um menino e uma menina</button></p>` +
                                `<p><button type="button" id="alt4" value="quest8" onclick="questoes(0)"> Quatro, dois meninos e duas meninas</button></p>`;
                            }else{
                                if(alt1 == 'quest8' || alt2 == 'quest8' || alt3 == 'quest8' || alt4 == 'quest8'){
                                    totalPontos += _alt;
                                    pergunta.innerHTML = `<p id="txtPergunta">9 - Qual o nome da filha (ou de uma das filhas) de Shrek?</p>`;
                                    alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest9" onclick="questoes(0)">Mandie</button></p>` +
                                    `<p><button type="button" id="alt2" value="quest9" onclick="questoes(0)">Carter</button></p>` +
                                    `<p><button type="button" id="alt3" value="quest9" onclick="questoes(1)">Felícia</button></p>` +
                                    `<p><button type="button" id="alt4" value="quest9" onclick="questoes(0)">Elisa</button></p>`;
                                }else{
                                    if(alt1 == 'quest9' || alt2 == 'quest9' || alt3 == 'quest9' || alt4 == 'quest9'){
                                        totalPontos += _alt;
                                        pergunta.innerHTML = `<p id="txtPergunta">10 - Em qual conto de fadas é baseada a história do filme Enrolados?</p>`;
                                        alternativas.innerHTML = `<p><button type="button" id="alt1" value="quest10" onclick="questoes(0)">Branca de Neve</button></p>` +
                                        `<p><button type="button" id="alt2" value="quest10" onclick="questoes(0)">Cinderela</button></p>` +
                                        `<p><button type="button" id="alt3" value="quest10" onclick="questoes(0)">Feiurinha</button></p>` +
                                        `<p><button type="button" id="alt4" value="quest10" onclick="questoes(1)">Rapuzel</button></p>`;
                                    }else{
                                        if(alt1 == 'quest10' || alt2 == 'quest10' || alt3 == 'quest10' || alt4 == 'quest10'){
                                            totalPontos += _alt;
                                            pergunta.innerHTML = `<p id="txtPontos"><strong id="pontos">${totalPontos}</strong></p>`;;
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
                                                                alternativas.innerHTML = `<p id="mensagemPont"><strong id="parabens">PARABÉNS</strong>, você é um verdadeiro fã de filmes!</p>`;
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

`<p id="txtPergunta"></p>`;
*/