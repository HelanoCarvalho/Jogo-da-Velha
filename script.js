var vez = 1
var vencedor = '' 

var divjogo = document.getElementById('jogo')

var div = document.getElementById('quadrado1')
var div2 = document.getElementById('quadrado2')
var div3 = document.getElementById('quadrado3')
var div4 = document.getElementById('quadrado4')
var div5 = document.getElementById('quadrado5')
var div6 = document.getElementById('quadrado6')
var div7 = document.getElementById('quadrado7')
var div8 = document.getElementById('quadrado8')
var div9 = document.getElementById('quadrado9')

var um = ''
var dois = ''
var tres = ''
var quatro = ''
var cinco = ''
var seis = ''
var sete = ''
var oito = ''
var nove = ''


function jogar1(){
    vez += 1
    if( div.click && vez % 2 == 0){
        div.style.backgroundImage = "url(X.png)"
        um = 'X'
    }else if( div.click && vez % 2 == 1){
        div.style.backgroundImage = "url(O.png)"
        um = 'O'
    }
    div.removeAttribute('onclick')
}

function jogar2(){
    vez += 1
    if( div2.click && vez % 2 == 0){
        div2.style.backgroundImage = "url(X.png)"
        dois = 'X'
    }else if( div2.click && vez % 2 == 1){
        div2.style.backgroundImage = "url(O.png)"
        dois = 'O'
    }
    div2.removeAttribute('onclick')
}

function jogar3(){
    vez += 1
    if( div3.click && vez % 2 == 0){
        div3.style.backgroundImage = "url(X.png)"
        tres = 'X'
    }else if( div3.click && vez % 2 == 1){
        div3.style.backgroundImage = "url(O.png)"
        tres = 'O'
    }
    div3.removeAttribute('onclick')
}

function jogar4(){
    vez += 1
    if( div4.click && vez % 2 == 0){
        div4.style.backgroundImage = "url(X.png)"
        quatro = 'X'
    }else if( div4.click && vez % 2 == 1){
        div4.style.backgroundImage = "url(O.png)"
        quatro = 'O'
    }
    div4.removeAttribute('onclick')
}

function jogar5(){
    vez += 1
    if( div5.click && vez % 2 == 0){
        div5.style.backgroundImage = "url(X.png)"
        cinco = 'X'
    }else if( div5.click && vez % 2 == 1){
        div5.style.backgroundImage = "url(O.png)"
        cinco = 'O'
    }
    div5.removeAttribute('onclick')
}

function jogar6(){
    vez += 1
    if( div6.click && vez % 2 == 0){
        div6.style.backgroundImage = "url(X.png)"
        seis = 'X'
    }else if( div6.click && vez % 2 == 1){
        div6.style.backgroundImage = "url(O.png)"
        seis = 'O'
    }
    div6.removeAttribute('onclick')
}

function jogar7(){
    vez += 1
    if( div7.click && vez % 2 == 0){
        div7.style.backgroundImage = "url(X.png)"
        sete = 'X'
    }else if( div7.click && vez % 2 == 1){
        div7.style.backgroundImage = "url(O.png)"
        sete = 'O'
    }
    div7.removeAttribute('onclick')
}

function jogar8(){
    vez += 1
    if( div8.click && vez % 2 == 0){
        div8.style.backgroundImage = "url(X.png)"
        oito = 'X'
    }else if( div8.click && vez % 2 == 1){
        div8.style.backgroundImage = "url(O.png)"
        oito = 'O'
    }
    div8.removeAttribute('onclick')
}

function jogar9(){
    vez += 1
    if( div9.click && vez % 2 == 0){
        div9.style.backgroundImage = "url(X.png)"
        nove = 'X'
    }else if( div9.click && vez % 2 == 1){
        div9.style.backgroundImage = "url(O.png)"
        nove = 'O'
    }
    div9.removeAttribute('onclick')
}

function teste(a, b, c){
    if(a == 'O' && b == 'O' && c == 'O'){
        vencedor = 'O'
   }else if(a == 'X' && b == 'X' && c == 'X'){
        vencedor = 'X'
}
}

function fim(){
    teste(um, dois, tres) // cima
    teste(quatro, cinco, seis) // meio horizontal
    teste(sete, oito, nove) // baixo
    teste(um, quatro, sete) // esquerda
    teste(dois, cinco, oito) // meio diagonal
    teste(tres, seis, nove) // direita
    teste(tres, cinco, sete) // X
    teste(um, cinco, nove) // X

    if(vencedor == 'X'){
        var fim =  document.createElement('div')
        var botao = document.createElement('input')
        var x = document.createElement('h1')
        x.innerHTML = 'Jogador X ganhou'
        botao.setAttribute('type', 'button')
        botao.setAttribute('value', 'Jogar Novamente')
        botao.setAttribute('onclick', 'window.location.reload()')
        fim.appendChild(x)
        fim.appendChild(botao)
        fim.setAttribute('id', 'fim')
        divjogo.appendChild(fim)
       
    }else if(vencedor == 'O'){
        var fim =  document.createElement('div')
        var botao = document.createElement('input')
        var x = document.createElement('h1')
        x.innerHTML = 'Jogador O ganhou'
        botao.setAttribute('type', 'button')
        botao.setAttribute('value', 'Jogar Novamente')
        botao.setAttribute('onclick', 'window.location.reload()')
        fim.appendChild(x)
        fim.appendChild(botao)
        fim.setAttribute('id', 'fim')
        divjogo.appendChild(fim)
       
    }

}