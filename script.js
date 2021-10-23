var hootText = `<li id="reconhecimento" class="escolha" onclick="dado('reconhecimento')">
<a href="#">Reconhecimento</a>
</li>
<li id="sabotagem" class="escolha" onclick="abrir('sabotagem', 'lista2', 'sabotagem', 'embarcações')">
<a href="#">Sabotagem</a>
</li>
<ul id="lista2" class="close">
<li id="bote_de_patrulha" class="escolha02" onclick="dado('sabotagem', 'bote de patrulha')">
    <a href="#">Bote de Patrulha</a>
</li>
<li id="submarino" class="escolha02" onclick="dado('sabotagem', 'submarino')">
    <a href="#">Submarino</a>
</li>
<li id="destroyer" class="escolha02" onclick="dado('sabotagem', 'destroyer')">
    <a href="#"><em>Destroyer</em></a>
</li>
<li id="cruzador" class="escolha02" onclick="dado('sabotagem', 'cruzador')">
    <a href="#">Cruzador</a>
</li>
<li id="porta_aviões" class="escolha02" onclick="dado('sabotagem', 'porta aviões')">
    <a href="#">Porta Aviões</a>
</li>
</ul>
<li id="submersão" class="escolha" onclick="dado('submersão')">
<a href="#">Submersão</a>
</li>
<li id="antimísseis" class="escolha" onclick="abrir('antimísseis', 'lista3', 'antimísseis', 'situação')">
<a href="#">Antimísseis</a>
</li>
<ul id="lista3" class="close">
<li class="escolha02" onclick="dado('antimísseis', 'destroyer', 1)">
    <a href="#">1º Míssil</a>
</li>
<li class="escolha02" onclick="dado('antimísseis', 'destroyer', 2)">
    <a href="#">2º Missil</a>
</li>
</ul>
<li id="antiaéreo" class="escolha" onclick="abrir('antiaéreo', 'lista4', 'antiaéreo', 'situação')">
<a href="#">Antiaéreo</a>
</li>
<ul id="lista4" class="close">
<li class="escolha02" onclick="dado('antiaéreo', 'cruzador', 1)">
    <a href="#">Um Canhão</a>
</li>
<li class="escolha02" onclick="dado('antiaéreo', 'cruzador', 2)">
    <a href="#">Dois Canhões</a>
</li>
</ul>
<li id="dálmata" class="escolha" onclick="abrir('dálmata', 'lista5', 'dálmata', 'situação')">
<a href="#">Dálmata</a>
</li>
<ul id="lista5" class="close">
<li class="escolha02" onclick="dado('dálmata', 'Contra Caça-torpedeiro')">
    <a href="#">Contra Caça-torpedeiro</a>
</li>
<li class="escolha02" onclick="dado('dálmata', 'Contra Bombardeiro Oestreich')">
    <a href="#">Contra Bombardeiro <em>Oestreich</em></a>
</li>
</ul>`
var resposta = window.document.getElementById('resposta')

function evidenciar(ativador, textoAtivador) {    
    var reconhecimento = window.document.getElementById('reconhecimento')    
    var sabotagem = window.document.getElementById('sabotagem')
    var submersão = window.document.getElementById('submersão')
    var antimísseis = window.document.getElementById('antimísseis')
    var antiaéreo = window.document.getElementById('antiaéreo')
    var dálmata = window.document.getElementById('dálmata')
    
    if (ativador == 'sabotagem') {
        if (sabotagem.innerText.toLowerCase() == textoAtivador) { 
            reconhecimento.style.display = 'none'
            submersão.style.display = 'none'
            antimísseis.style.display = 'none'
            antiaéreo.style.display = 'none'
            dálmata.style.display = 'none'
        }
        else {
            reconhecimento.style.display = 'block'
            submersão.style.display = 'block'
            antimísseis.style.display = 'block'
            antiaéreo.style.display = 'block'
            dálmata.style.display = 'block'
        }
    }
    else if (ativador == 'antimísseis') {
        if (antimísseis.innerText.toLowerCase() == textoAtivador) {
            reconhecimento.style.display = 'none'
            sabotagem.style.display = 'none'
            submersão.style.display = 'none'
            antiaéreo.style.display = 'none'
            dálmata.style.display = 'none'
        }
        else {
            reconhecimento.style.display = 'block'
            sabotagem.style.display = 'block'
            submersão.style.display = 'block'
            antiaéreo.style.display = 'block'
            dálmata.style.display = 'block'
        }
    }
    else if (ativador == 'antiaéreo') {
        if (antiaéreo.innerText.toLowerCase() == textoAtivador) {
            reconhecimento.style.display = 'none'
            sabotagem.style.display = 'none'
            submersão.style.display = 'none'
            antimísseis.style.display = 'none'
            dálmata.style.display = 'none'
        }
        else {
            reconhecimento.style.display = 'block'
            sabotagem.style.display = 'block'
            submersão.style.display = 'block'
            antimísseis.style.display = 'block'
            dálmata.style.display = 'block'
        }
    }
    else if (ativador == 'dálmata') {
        if (dálmata.innerText.toLowerCase() == textoAtivador) {
            reconhecimento.style.display = 'none'
            sabotagem.style.display = 'none'
            submersão.style.display = 'none'
            antimísseis.style.display = 'none'
            antiaéreo.style.display = 'none'
        }
        else {
            reconhecimento.style.display = 'block'
            sabotagem.style.display = 'block'
            submersão.style.display = 'block'
            antimísseis.style.display = 'block'
            antiaéreo.style.display = 'block'
        }
    }
}

fechado = true
function abrir(ativador, ativado, textoAtivador, textoDesativador) {
    var botão = window.document.getElementById(`${ativador}`)
    var menu = window.document.getElementById(`${ativado}`)
    if (window.document.title == 'Jogos') {
        window.evidenciar(ativador, textoAtivador)
        if (botão.innerText.toLowerCase() == textoAtivador) {
            menu.style.display = 'block'
            botão.innerHTML = `<a href="#">${textoDesativador[0].toUpperCase()}${textoDesativador.slice(1)}</a>`
        }
        else if (botão.innerText.toLowerCase() == textoDesativador) {
            menu.style.display = 'none'
            botão.innerHTML = `<a href="#">${textoAtivador[0].toUpperCase()}${textoAtivador.slice(1)}</a>`
        }
        resposta.innerHTML = '<p id="resposta" style="margin:0px;"></p>'
    }
    if (textoAtivador == false) {
        if (fechado) {
            menu.style.display = 'block'
            fechado = false
        }
        else {
            menu.style.display = 'none'
            fechado = true
        }
    }
}

function dado(abilidade, embarcação='', número=0) {
    // Reescreve a lista para que os testes sejão refeitos
    var listaTeste = window.document.getElementById('lista1')
    listaTeste.innerHTML = hootText
    var linhaTeste = window.document.getElementById(`${abilidade}`)
    
    // Algoritimo responsavel pelo sorteio do dado
    var min = Math.ceil(1)
    var max = Math.floor(11)
    var resultado = Math.floor(Math.random() * (max - min)) + min
    var respostaFinal
    //    keys[abilidades, resultado, efetiviodade, complementos]
    var exito = [abilidade, resultado]

    console.log(`Função dado acionada pela abilidade ${abilidade}. O valor gerado foi ${resultado}`)
    respostaFinal = `<p class="resultado-númerico">Resultado do teste foi ${resultado}.</p>`

    // Este if realiza o teste da abilidade reconhecimento
    if (abilidade == 'reconhecimento') {
        console.log(`Teste para o ${linhaTeste.innerText} acionado`)
        
        var embarcações = ''
        if (resultado < 3) {
            embarcações = '<p class="resultado">Nenhuma embarcação encontrada</p>'
            exito[2] = false //exito[2] se refere ao terceiro item do vetor exito
            exito[3] = 'Nenhuma embarcação'
        }
        if (resultado >= 3) {
            embarcações = '<p class="resultado">Embarcações que aparecerão no radar:</p>'
            embarcações += '<li class="resultado">Porta aviões</li>'
            exito[2] = true
            exito[3] = ['Porta aviões']
        }
        if (resultado >= 5) {
            embarcações += '<li class="resultado">Cruzador</li>'
            exito[3][1] = 'Cruzador'
        }
        if (resultado >= 7) {
            embarcações += '<li class="resultado"><em>Destroyer</em></li>'
            exito[3][2] =  'Destroyer'
        }
        if (resultado >= 9) {
            embarcações += '<li class="resultado">Bote de patrulha</li>'
            exito[3][3] = 'Bote de patrulha'
        }
        if (resultado == 10) {
            embarcações += '<li class="resultado">Submarino</li>'
            exito[3][4] = 'Submarino'
        }

        respostaFinal += `${embarcações}`
    }

    // Este if realiza o teste da abilidade sabotagem
    if (abilidade == 'sabotagem' && embarcação != '') {
        console.log(`Teste para a ${linhaTeste.innerText} acionado por ${embarcação}`)     

        if (resultado == 1) {
            respostaFinal += `<p class="resultado">Erro Crítico.<br>Sabotagem inativa por uma rodada.</p>`
            exito[2] = false
            exito[3] = 'Erro Crítico'
        }
        else if (resultado == 10) {
            respostaFinal += `<p class="resultado">Acerto crítico.<br>Sabotagem efetiva por dois Trunos.</p>`
            exito[2] = true
            exito[3] = 'Acerto crítico'
        }
        else if (embarcação == 'bote de patrulha' && resultado == 9) {
            respostaFinal += `<p class="resultado">Bote de patrulha sabotado.</p>`
            exito[2] = true
            exito[3] = 'Bote de patrulha sabotado'
        }
        else if (embarcação == 'submarino' && resultado > 7) {
            respostaFinal += `<p class="resultado">Submarino sabotado.</p>`
            exito[2] = true
            exito[3] = 'Submarino sabotado'
        }
        else if (embarcação == 'destroyer' && resultado > 5) {
            respostaFinal += `<p class="resultado"><em>Destroyer</em> sabotado.</p>`
            exito[2] = true
            exito[3] = 'Destroyer sabotado'
        }
        else if (embarcação == 'cruzador' && resultado > 4) {
            exito[2] = true
            if (resultado == 5 || resultado == 6) {
                respostaFinal += `<p class="resultado">Cruzador sabotado.<br>Um canhão inativo.</p>`
                exito[3] = 'Cruzador sabotado. Um canhão inativo.'
            }
            else {
                respostaFinal += `<p class="resultado">Cruzador sabotado.<br>Dois canhões inativos.</p>`
                exito[3] = 'Cruzador sabotado. Dois canhões inativos'
            }
        }
        else if (embarcação == 'porta aviões' && resultado > 6) {
            respostaFinal += `<p class="resultado">Porta aviões sabotado.</p>`
            exito[2] = true
            exito[3] = 'Porta aviões sabotado'
        }
        else {
            respostaFinal += `<p class="resultado">Sabotagem fracasada.</p>`
            exito[2] = false
            exito[3] = 'Sabotagem fracasada'
        }
    }

    // Este if realiza o teste da abilidade Submersão
    if (abilidade == 'submersão') {
        console.log(`Teste para a ${linhaTeste.innerText} acionado`)

        if (resultado >= 6) {
            respostaFinal += `<p class="resultado">Submersão bem sucedida.</p>`
            exito[2] = true
        }
        else {
            respostaFinal += `<p class="resultado">Submarino atingido.</p>`
            exito[2] = false
        }
    }

    // Este if realiza o teste da abilidade Antimísseis
    if (abilidade == 'antimísseis' && número != 0) {
        console.log(`Teste para o ${linhaTeste.innerText} acionado pelo ${número}º disparo`)
        
        if (número == 1 && resultado > 6) {
            respostaFinal += `<p class="resultado">1º Míssil neutralizado.</p>`
            exito[2] = true
        }
        else if (número == 2 && resultado > 8) {
            respostaFinal += `<p class="resultado">2º Míssil neutralizado.</p>`
            exito[2] = true
        }
        else {
            respostaFinal += `<p class="resultado">O ${número}º Míssil atingiu seu alvo</p>`
            exito[2] = false
        }
    }

    // Este if realiza o teste da abilidade antiaéreo
    if (abilidade == 'antiaéreo' && número != 0) {
        console.log(`Teste para o ${linhaTeste.innerText} acionado pelo ${número} canhão`)

        if (número == 2 && resultado >= 5) {
            if (resultado >= 7) {
                respostaFinal += `<p class="resultado">Aéronave abatida<br>Ataque neutralizado.</p>`
                exito[2] = true
                exito[3] = 'inimigo abatido'                        
            }
            else {
                respostaFinal += `<p class="resultado">Aéronave abatida<br>Ataque inimigo realizado</p>`
                exito[2] = false
                exito[3] = 'inimigo abatido'
            }
        }
        else if (número == 1 && resultado >= 8) {
            if (resultado >= 9) {
                respostaFinal += `<p class="resultado">Aéronave abatida<br>Ataque neutralizado</p>`
                exito[2] = true
                exito[3] = 'inimigo abatido'                            
            }
            else {
                respostaFinal += `<p class="resultado">Aéronave abatida<br>Ataque inimigo realizado</p>`
                exito[2] = false
                exito[3] = 'inimigo abatido'
            }
        }    
        else {
            respostaFinal += `<p class="resultado">Ataque inimigo realizado</p>`
            exito[2] = false
            exito[3] = 'inimigo vivo'
        } 
    }

    //Este if realiza o teste da abilidade dálmata
    if (abilidade == 'dálmata') {
        console.log(`Teste para o ${linhaTeste.innerText} acionado ${embarcação}`)

        if (embarcação == 'Contra Caça-torpedeiro') {
            exito[4] = 'Contra Caça-torpedeiro'
            if (resultado < 3) {
                respostaFinal += `<p class="resultado">Dálmata abatido em combate.</p>`
                exito[2] = false
                exito[3] = 'Dálmata abatido'
            }
            else if (resultado > 8) {
                respostaFinal += `<p class="resultado">Aéronave abatida<br>Ataque neutralizado.</p>`
                exito[2] = true
                exito[3] = 'inimigo abatido'
            }
            else if (resultado < 7){
                respostaFinal += `<p class="resultado">Ataque inimigo realizado</p>`
                exito[2] = false 
                exito[3] = 'inimigo vivo'
            }
            else {
                respostaFinal += `<p class="resultado">Aéronave abatida<br>Ataque inimigo realizado.</p>`
                exito[2] = false
                exito[3] = 'inimigo abatido'
            }
        }
        else {
            switch (resultado) {
                case 1:
                    respostaFinal += `<p class="resultado">Dálmata abatido em combate.</p>`
                    exito[2] = [false, false, false, false, false]
                    exito[3] = 'Dálmata abatido'
                    break
                case 5:
                    respostaFinal += `<p class="resultado">Aéronave abatida<br>Posibilidade de 5 Bombas lançadas.</p>`
                    exito[2] = [false, false, false, false, false]
                    exito[3] = 'inimigo abatido'
                    break
                case 6:
                    respostaFinal += `<p class="resultado">Aéronave abatida<br>Posibilidade de 4 Bombas lançadas.</p>`
                    exito[2] = [false, false, false, false, true]
                    exito[3] = 'inimigo abatido'
                    break
                case 7:
                    respostaFinal += `<p class="resultado">Aéronave abatida<br>Posibilidade de 3 Bombas lançadas.</p>`
                    exito[2] = [false, false, false, true, true]
                    exito[3] = 'inimigo abatido'
                    break
                case 8:
                    respostaFinal += `<p class="resultado">Aéronave abatida<br>Posibilidade de 2 Bombas lançadas.</p>`
                    exito[2] = [false, false, true, true, true]
                    exito[3] = 'inimigo abatido'
                    break
                case 9:
                    respostaFinal += `<p class="resultado">Aéronave abatida<br>Posibilidade de 1 Bomba lançada.</p>`
                    exito[2] = [false, true, true, true, true]
                    exito[3] = 'inimigo abatido'
                    break
                case 10:
                    respostaFinal += `<p class="resultado">Aéronave abatida<br>Ataque neutralizado.</p>`
                    exito[2] = [true, true, true, true, true]
                    exito[3] = 'inimigo abatido'
                    break
                default:
                    respostaFinal += `<p class="resultado">Ataque inimigo realizado.</p>`
                    exito[2] = [false, false, false, false, false]
                    exito[3] = 'inimigo vivo'
                    break
            }
        }
    }
    listaTeste.style.display = 'none'
    window.document.getElementById('abilidades').innerHTML = '<a href="#">Teste de dificuldade</a>'
    resposta.innerHTML = respostaFinal
    window.historico(exito)
}

class Embarcação {
    constructor(nome, abilidadePrimaria, efetivos, abilidadeSecundaria) {
        this.nome = nome
        this.abilidadePrimaria = abilidadePrimaria
        this.efetivos = efetivos
        this.abilidadeSecundaria = abilidadeSecundaria
    }
}

class Player {
    constructor(nome, embarcações) {
        this.nome = nome
        this.embarcações = embarcações
    }
}

class Coordenada {
    constructor(y, x) {
        this.y = y
        this.x = x
    }
}

class Eventos {
    constructor(listener, next) {
        if (next) {
            let originalColor = [next.style.backgroundColor, next.style.borderColor, next.style.borderStyle]
            this.on = function() {
                next.style.backgroundColor = '#ffc90e'
                next.style.borderColor = '#19218f'
                next.style.borderStyle = 'groove'
            }
            this.off = function() {
                next.style.backgroundColor = originalColor[0]
                next.style.borderColor = originalColor[1]
                next.style.borderStyle = originalColor[2]
            }
        }
    }
}

class GerenciadorDeEventos {
    constructor(nTab, letra, número) {
        let c3 = calculo_de_c3(letra, número) 
        if (c3) {
            this.next = document.getElementById(`${nTab}${numberToLetter(c3.y)}${numberToLetter(c3.x, true)}`)
        } else {this.next = c3}

        this.listener = document.getElementById(`${nTab}${letra}${número}`)
        this.eventos = new Eventos(this.listener, this.next)
        this.adicionar = function () {
            this.listener.addEventListener('mouseenter', this.eventos.on)
            this.listener.addEventListener('mouseout', this.eventos.off)
        }
        this.remover = function () {
            this.listener.removeEventListener('mouseenter', this.eventos.on)
            this.listener.removeEventListener('mouseout', this.eventos.off)
        }
    }
}

let jogador1 = new Player('Peronio', [
    new Embarcação('Bote de Patrulha', 'Canhão bote', 1, 'Reconhecimento'),
    new Embarcação('Submarino', 'Torpedo', 3, 'Submersão'),
    new Embarcação('Destroyer', 'Mísseis', 2, 'Antimísseis'),
    new Embarcação('Cruzador', 'Canhão Cruzador', 4, 'Antiaéreo'),
    new Embarcação('Porta Avioes', 'Battleshit', 3, 'Dálmata')
])
let jogador2 = new Player('Olga', [
    new Embarcação('Bote de Patrulha', 'Canhão bote', 1, 'Sabotagem'),
    new Embarcação('Submarino', 'Torpedo', 3, 'Submersão'),
    new Embarcação('Destroyer', 'Mísseis', 2, 'Antimísseis'),
    new Embarcação('Cruzador', 'Canhão Cruzador', 4, 'Antiaéreo'),
    new Embarcação('Porta Avioes', 'Oestreich', 5, 'Dálmata')
])
let seletor = document.getElementById('registro')
let vez = [1, jogador1, jogador2] //Vetor que serve de contador para o revezamento dos jogadores
let efetivo = 1                  //Variavel que serve de contador para as ações/turno de qualquer barco
let rodada = 1                  //Variavel que armazena o número de rodadas 
let index = 0                  //Variavel que serve de indice para a lista de barcos
let c_turno = []              //Vetor responsavel por armazenar todas as coordenadas/turno de qualquer barco 
let c_all = []               //Vetor responsavel por armazenar todas as coordenadas declaradas no jogo
let zona = []

function calculo_de_c3(letra, número) {
    //Coletando as coordenadas para a validação da segunda
    let c1 = new Coordenada(c_turno[0].y, c_turno[0].x)
    let c2 = new Coordenada(letterToNumber(letra), parseInt(número))

    //Calculando o x da terceira coordenada
    if (c2.x > c1.x) {terceiro_x = c2.x + 1}
    else if (c2.x < c1.x) {terceiro_x = c2.x - 1}
    else {terceiro_x = c2.x}
        
    //Claculendo o y da terceira coordenada
    if (c2.y > c1.y) {terceiro_y = c2.y + 1}
    else if (c2.y < c1.y) {terceiro_y = c2.y - 1}
    else {terceiro_y = c2.y}

    if (terceiro_x < 11 && terceiro_x > 0) {
        if (terceiro_y < 11 && terceiro_y > 0) {return new Coordenada(terceiro_y, terceiro_x)}
    }
    return false
}

function registros(classe, txt) {
    let registro = document.createElement('option')
    registro.setAttribute('class', classe)
    registro.innerText = txt
    return registro
}

function sleep(time) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < time*100);
}

function letterToNumber(letra) {
    switch (letra) { 
        case 'a':
            return 1
        case 'b':
            return 2
        case 'c':
            return 3
        case 'd':
            return 4
        case 'e':
            return 5
        case 'f':
            return 6
        case 'g':
            return 7
        case 'h':
            return 8
        case 'i':
            return 9
        case 'j':
            return 10
        default:
            break
    }
}

function numberToLetter(número, toString=false) {
    switch (número) {
        case 1:
            if (toString) {return '1'} else {return 'a'}
        case 2:
            if (toString) {return '2'} else {return 'b'}
        case 3:
            if (toString) {return '3'} else {return 'c'}
        case 4:
            if (toString) {return '4'} else {return 'd'}
        case 5:
            if (toString) {return '5'} else {return 'e'}
        case 6:
            if (toString) {return '6'} else {return 'f'}
        case 7:
            if (toString) {return '7'} else {return 'g'}
        case 8:
            if (toString) {return '8'} else {return 'h'}
        case 9:
            if (toString) {return '9'} else {return 'i'}
        case 10:
            if (toString) {return '10'} else {return 'j'}
        default:
            break
    }
}

function validação(nTab, letra, número) {
    //Primeiro o x resebe um valor numerico, e a estrutura switch atribui um valor para o y
    let x; let y
    x = parseInt(número)
    y = letterToNumber(letra)
    
    //Este teste vailda a jogada relacionando o jogador da vez com seu respectivo tabuleiro
    if (nTab == vez[0]) {
        c_turno.push(new Coordenada(y, x)); console.log(c_turno)

        //Este swicth é para validar o uso do submarino
        switch (index) {
            case 1:
                console.log(`Validação da jogada do submarino nas coordenadas(${x}, ${y})`)
                if (efetivo == 1) {
                    //Gerando a zona de ação do torpedo baseado na primeira coordenada
                    zonaFantasma = [[-1, -1],[-1, 0],[-1, +1],[0, +1],[+1, +1],[+1, 0],[+1, -1],[0, -1]]
                    for (let c=0; c<zonaFantasma.length; c++) {
                        if (y + zonaFantasma[c][0] > 0 && y + zonaFantasma[c][0] < 11) {
                            if (x + zonaFantasma[c][1] > 0 && x + zonaFantasma[c][1] < 11) {
                               zona.push(
                                   new GerenciadorDeEventos(
                                       nTab, 
                                       numberToLetter(y + zonaFantasma[c][0]), 
                                       numberToLetter(x + zonaFantasma[c][1], true)
                                   )
                               ) 
                            }
                        }                      
                    }
                    for (var c in zona) {
                        zona[c].adicionar()
                    }
                }
                if (efetivo == 2) {
                    //Coletando as coordenadas para a validação da segunda
                    let primeiro_x = c_turno[0].x; let segundo_x = c_turno[1].x
                    let primeiro_y = c_turno[0].y; let segundo_y = c_turno[1].y
                    
                    //Validação da segunda coordenada
                    if (segundo_x > primeiro_x-2 && 
                        segundo_x < primeiro_x+2 && 
                        segundo_y > primeiro_y-2 && 
                        segundo_y < primeiro_y+2) {
                        
                        for (let c in zona) {
                            zona[c].remover()
                        }
                        zona = []

                        let c3 = calculo_de_c3(letra, número)
                        if (!c3) {efetivo++} 
                        else {return [nTab, numberToLetter(c3.y), numberToLetter(c3.x, true)]}
                    } else {
                        c_turno.pop()
                        return false
                    }
                } break
            case 2:
                console.log(`Validação da jogada do destroyer nas coodenadas(${x}, ${y})`)
                break
            case 3:
                console.log(`Validação da jogada do cruzador nas coordenadas(${x}, ${y})`)
                break
            case 4:
                console.log(`Validação da jogada do porta aviões nas coordenadas(${x}, ${y})`)
        }
        return [1]
    } else {return false}
}

if (window.document.title == 'Jogos') {
    window.document.getElementById('nomejogador').innerText = `${jogador1.nome} - ${jogador2.embarcações[index].nome}`
    seletor.appendChild(registros('destaque', `${vez[vez[0]].nome} - ${vez[vez[0]].embarcações[index].nome}`))
}
function historico(par1, letra, número) {
    quindi = validação(par1, letra, número)
    if (par1.length == 1 && quindi) {
        
        //O primero resultado da função é a marcação do tabuleiro
        let coordenada = window.document.getElementById(`${par1}${letra}${número}`)
        coordenada.style.backgroundColor = '#19218f'
        coordenada.style.borderColor = '#ffc90e'
        coordenada.style.borderStyle = 'double'
        coordenada.removeAttribute('onclick')

        //O segundo resultado da função é o registro da jogada na div.caixa-de-registro
        seletor.appendChild(registros('normal', `${vez[vez[0]].embarcações[index].abilidadePrimaria}: ${letra.toUpperCase()}▬${número}`))
        
        //Este algoririto é responsavel por passar a vez, trocando os barcos, e revesando os jogadores
        if (vez[0] == 1) {    
            if (efetivo == jogador1.embarcações[index].efetivos) {
                vez[0] = 2
                window.document.getElementById('nomejogador').innerText = `${jogador2.nome} - ${jogador2.embarcações[index].nome}`
                seletor.appendChild(registros('destaque', `${jogador2.nome} - ${jogador2.embarcações[index].nome}`))
                efetivo = 1
                c_turno = []
            } else {efetivo++}     
        } else {
            if (efetivo == jogador2.embarcações[index].efetivos) {
                vez[0] = 1
                if (index == 4) {
                    index = 0; rodada++ 
                    seletor.appendChild(registros('titulo', `${rodada}ª Rodada`))
                } else {index++}
                window.document.getElementById('nomejogador').innerText = `${jogador1.nome} - ${jogador1.embarcações[index].nome}`
                seletor.appendChild(registros('destaque', `${jogador1.nome} - ${jogador1.embarcações[index].nome}`))
                efetivo = 1
                c_turno = []
            } else {efetivo++}
        }
        if (quindi.length > 1) {window.historico(quindi[0], quindi[1], quindi[2])}
        
    } else if (!validação(par1)) {
        if (par1 == 1) {
            seletor.appendChild(registros('erro', `Não é sua vez ${jogador1.nome}`))
        } else {seletor.appendChild(registros('erro', `Não é sua vez ${jogador2.nome}`))}
    } else {
        let exito = par1

        seletor.innerHTML += `<option class="extenso">${exito[0][0].toUpperCase()}${exito[0].slice(1)} - ${exito[1]}</option>`    
       
        // Este if retorna o registro do reconhecimento
        if (exito[0] == 'reconhecimento') {
            if (!exito[2]) {
                seletor.innerHTML += `<option class="extenso">Nenhuma embarcação encontrada</option>` 
            } else {
                seletor.innerHTML += `<option class="extenso">Embarcações:</option>`
                for (let c=0; c < exito[3].length; c++) {
                    seletor.innerHTML += `<option class="extenso">${exito[3][c]}</option>`
                }
            }  
        }

        // Este if retorna o registro da sabotagem
        if (exito[0] == 'sabotagem') {seletor.innerHTML += `<option class="extenso">${exito[3]}</option>`}

        // Este if retorna o registro da submersão
        if (exito[0] == 'submersão') {
            if (exito[2]) {seletor.innerHTML += `<option class="extenso">Submersão bem sucedida</option>`}
            else {seletor.innerHTML += `<option class="extenso">Submarino atingido</option>`}
        }

        // Este if retorna o registro do antimísseis
        if (exito[0] == 'antimísseis') {
            if (exito[2]) {seletor.innerHTML += `<option class="extenso">Míssil neutralizado</option>`}
            else {seletor.innerHTML += `<option class="extenso">Míssil atingiu seu alvo</option>`}
        }

        // Este if retorna o registro do antiaéreo
        if (exito[0] == 'antiaéreo') {
            if (exito[2]) {seletor.innerHTML += `<option class="extenso">Ataque neutralizado</option>`}
            else {seletor.innerHTML += `<option class="extenso">Ataque realizado</option>`}
            seletor.innerHTML += `<option class="extenso">${exito[3]}</option>`
        }

        // Este if retorna o registro do dálmata
        if (exito[0] == 'dálmata') {
            if (exito[4] == 'Contra Caça-torpedeiro') {
                if (exito[2]) {seletor.innerHTML += `<option class="extenso">Ataque neutralizado</option>`}
                else {seletor.innerHTML += `<option class="extenso">Ataque inimigo realizado</option>`}
                seletor.innerHTML += `<option class="extenso">${exito[3]}</option>`
            }
            else {
                seletor.innerHTML += `<option class="extenso">${exito[3]}</option>`
                for (let c=0; c < exito[2].length; c++) {
                    if (!exito[2][c]) {seletor.innerHTML += `<option class="extenso">${c+1}º Bomba lançada</option>`}
                }
            }
        }
    }
}

function revelation(letra, número) {
    console.log(`Coordenadas: ${letra.toUpperCase()}, ${número}`)
}
