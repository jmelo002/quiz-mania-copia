/*
Estea arquivo faz os processos no arquivo game_of_thrones e simpsons.html
*/ 

var alt1e2 = window.document.getElementById('alternativas1e2');
var alt3e4 = window.document.getElementById('alternativas3e4');
var pergunta = window.document.getElementById('questao');
var totalPontos = 0;

function questoes(_alt = 0){
    var alt1 = window.document.getElementById('alt1').value;
    var alt2 = window.document.getElementById('alt2').value;
    var alt3 = window.document.getElementById('alt3').value;
    var alt4 = window.document.getElementById('alt4').value;

    if(alt1 == 'quest1' || alt2 == 'quest1' || alt3 == 'quest1' || alt4 == 'quest1'){
        totalPontos += _alt;
        pergunta.innerHTML = `<p id="txtPergunta">2 - Qual o nome que Jofrey Baratheon da à sua espada que recebeu de seu avô no dia de seu casamento?</p>`;
        alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest2" onclick="questoes(0)">Decapitadora</button></p>` +
        `<p><button type="button" id="alt2" value="quest2" onclick="questoes(0)">Rugido de leão</button></p>`;

        alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest2" onclick="questoes(1)">Lamento da viúva</button></p>` +
        `<p><button type="button" id="alt4" value="quest2" onclick="questoes(0)">Vingadora</button></p>`;
    }else{
        if(alt1 == 'quest2' || alt2 == 'quest2' || alt3 == 'quest2' || alt4 == 'quest2'){
            totalPontos += _alt;
            pergunta.innerHTML = `<p id="txtPergunta">3 - Qual o(a) Lannister conhecido(a) como regicida?</p>`;
            alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest3" onclick="questoes(0)">Cersei</button></p>` +
            `<p><button type="button" id="alt2" value="quest3" onclick="questoes(0)">Tywin</button></p>`;

            alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest3" onclick="questoes(0)">Jofrey</button></p>` +
            `<p><button type="button" id="alt4" value="quest3" onclick="questoes(1)">Jamie</button></p>`;
        }else{
            if(alt1 == 'quest3' || alt2 == 'quest3' || alt3 == 'quest3' || alt4 == 'quest3'){
                totalPontos += _alt;
                pergunta.innerHTML =`<p id="txtPergunta">4. Qual desses é o(a) filho(a) mais novo(a) de Ned Stark?</p>`;
                alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest4" onclick="questoes(0)">Ária</button></p>` +
                `<p><button type="button" id="alt2" value="quest4" onclick="questoes(1)">Rickon</button></p>`;

                alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest4" onclick="questoes(0)">Bran</button></p>` +
                `<p><button type="button" id="alt4" value="quest4" onclick="questoes(0)">Sansa</button></p>`;
            }else{
                if(alt1 == 'quest4' || alt2 == 'quest4' || alt3 == 'quest4' || alt4 == 'quest4'){
                    totalPontos += _alt;
                    pergunta.innerHTML = `<p id="txtPergunta">5 - Quem é a pessoa que mata Rhaegar Thargaeryen?</p>`;
                    alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest5" onclick="questoes(1)">Robert Baratheon</button></p>` +
                    `<p><button type="button" id="alt2" value="quest5" onclick="questoes(0)">Jon Snow</button></p>`;

                    alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest5" onclick="questoes(0)">Tywin Lannister</button></p>` +
                    `<p><button type="button" id="alt4" value="quest5" onclick="questoes(0)">Jaime Lannister</button></p>`;
                }else{
                    if(alt1 == 'quest5' || alt2 == 'quest5' || alt3 == 'quest5' || alt4 == 'quest5'){
                        totalPontos += _alt;
                        pergunta.innerHTML = `<p id="txtPergunta">6 - Qual o lema da casa Bolton?</p>`;
                        alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest6" onclick="questoes(0)">Jamais traídos jamais esfolados</button></p>` +
                        `<p><button type="button" id="alt2" value="quest6" onclick="questoes(0)">Esfolados os inimigos</button></p>`;

                        alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest6" onclick="questoes(1)">Nossas lâminas são afiadas</button></p>` +
                        `<p><button type="button" id="alt4" value="quest6" onclick="questoes(0)">Morrer esfolado é morrer sem honra</button></p>`;
                    }else{
                        if(alt1 == 'quest6' || alt2 == 'quest6' || alt3 == 'quest6' || alt4 == 'quest6'){
                            totalPontos += _alt;
                            pergunta.innerHTML = `<p id="txtPergunta">7 - Qual e o sobrenome do Ralph?</p>`;
                            alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest7" onclick="questoes(0)">Flanders</button></p>` +
                            `<p><button type="button" id="alt2" value="quest7" onclick="questoes(1)">Wiggum</button></p>`;

                            alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest7" onclick="questoes(0)">Simpson</button></p>` +
                            `<p><button type="button" id="alt4" value="quest7" onclick="questoes(0)">Skinner</button></p>`;
                        }else{
                            if(alt1 == 'quest7' || alt2 == 'quest7' || alt3 == 'quest7' || alt4 == 'quest7'){
                                totalPontos += _alt;
                                pergunta.innerHTML = `<p id="txtPergunta">8 - Qual e o sobrenome de Apu?</p>`;
                                alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest8" onclick="questoes(1)">Nahasapeemapetilon</button></p>` +
                                `<p><button type="button" id="alt2" value="quest8" onclick="questoes(0)">Obadiah</button></p>`;

                                alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest8" onclick="questoes(0)">Bouvier</button></p>` +
                                `<p><button type="button" id="alt4" value="quest8" onclick="questoes(0)">Van Houter</button></p>`;
                            }else{
                                if(alt1 == 'quest8' || alt2 == 'quest8' || alt3 == 'quest8' || alt4 == 'quest8'){
                                    totalPontos += _alt;
                                    pergunta.innerHTML = `<p id="txtPergunta">9 - Qual a profissão do pai do Ralph?</p>`;
                                    alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest9" onclick="questoes(0)">Trabalhador da Usina Nuclear</button></p>` +
                                    `<p><button type="button" id="alt2" value="quest9" onclick="questoes(0)">Motorista</button></p>`;

                                    alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest9" onclick="questoes(0)">Detetive</button></p>` +
                                    `<p><button type="button" id="alt4" value="quest9" onclick="questoes(1)">Chefe de polícia</button></p>`;
                                }else{
                                    if(alt1 == 'quest9' || alt2 == 'quest9' || alt3 == 'quest9' || alt4 == 'quest9'){
                                        totalPontos += _alt;
                                        pergunta.innerHTML = `<p id="txtPergunta">10 - Qual o nome do chefe do Homer?</p>`;
                                        alt1e2.innerHTML = `<p><button type="button" id="alt1" value="quest10" onclick="questoes(0)">Mr. Gurns</button></p>` +
                                        `<p><button type="button" id="alt2" value="quest10" onclick="questoes(1)">Mr. Burns</button></p>`;

                                        alt3e4.innerHTML = `<p><button type="button" id="alt3" value="quest10" onclick="questoes(0)">Mr. Furns</button></p>` +
                                        `<p><button type="button" id="alt4" value="quest10" onclick="questoes(0)">Mr. Abu</button></p>`;
                                    }else{
                                        if(alt1 == 'quest10' || alt2 == 'quest10' || alt3 == 'quest10' || alt4 == 'quest10'){
                                            totalPontos += _alt;
                                            alt1e2.innerHTML = `<strong id="pontos">${totalPontos}</strong>`;

                                            alt3e4.innerHTML = `<strong id="pontos">${totalPontos}</strong>`;
                                            if(totalPontos == 0){
                                                pergunta.innerHTML = `<p id="mensagemPont">Mais sorte na próxima!</p>`;
                                            }else{
                                                if(totalPontos <= 4){
                                                    pergunta.innerHTML = `<p id="mensagemPont">Foi uma pontuação, mas não muito boa, que tal tentar de novo?</p>`;
                                                }else{
                                                    if(totalPontos >= 5 && totalPontos <= 7){
                                                        pergunta.innerHTML = `<p id="mensagemPont">Você conseguiu ótimos pontos, será que consegue ainda mais?</p>`;
                                                    }else{
                                                        if(totalPontos >=8 && totalPontos <= 9){
                                                            pergunta.innerHTML = `<p id="mensagemPont">Você obteve pontuações elevadas!</p>`;
                                                        }else{
                                                            if(totalPontos == 10){
                                                                pergunta.innerHTML = `<p id="mensagemPont"><strong id="parabens">PARABÉNS</strong>, você é um verdadeiro fã de música!</p>`;
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
`<p id="txtPergunta"></p>`;

alt 1 e 2
`<p><button type="button" id="alt1" value="quest" onclick="questoes()"></button></p>` +
`<p><button type="button" id="alt2" value="quest" onclick="questoes()"></button></p>`;

alt 3 e 4
`<p><button type="button" id="alt3" value="quest" onclick="questoes()"></button></p>` +
`<p><button type="button" id="alt4" value="quest" onclick="questoes()"></button></p>`;
*/