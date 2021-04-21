var vez = 1
var vencedor = '' 
var preenchido = 0

var divjogo = document.getElementById('jogo')

var um = ''
var dois = ''
var tres = ''
var quatro = ''
var cinco = ''
var seis = ''
var sete = ''
var oito = ''
var nove = ''

var div = document.getElementsByClassName('quadrado')

function jogar1(){
    vez += 1
    if( div[0].click && vez % 2 == 0){
        div[0].style.backgroundImage = "url(X.png)"
        um = 'X'
    }else if( div[0].click && vez % 2 == 1){
        div[0].style.backgroundImage = "url(O.png)"
        um = 'O'
    }
    preenchido += 1
    div[0].removeAttribute('onclick')
}

function jogar2(){
    vez += 1
    if( div[1].click && vez % 2 == 0){
        div[1].style.backgroundImage = "url(X.png)"
        dois = 'X'
    }else if( div[1].click && vez % 2 == 1){
        div[1].style.backgroundImage = "url(O.png)"
        dois = 'O'
    }
    preenchido += 1
    div[1].removeAttribute('onclick')
}

function jogar3(){
    vez += 1
    if( div[2].click && vez % 2 == 0){
        div[2].style.backgroundImage = "url(X.png)"
        tres = 'X'
    }else if( div[2].click && vez % 2 == 1){
        div[2].style.backgroundImage = "url(O.png)"
        tres = 'O'
    }
    preenchido += 1
    div[2].removeAttribute('onclick')
}

function jogar4(){
    vez += 1
    if( div[3].click && vez % 2 == 0){
        div[3].style.backgroundImage = "url(X.png)"
        quatro = 'X'
    }else if( div[3].click && vez % 2 == 1){
        div[3].style.backgroundImage = "url(O.png)"
        quatro = 'O'
    }
    preenchido += 1
    div[3].removeAttribute('onclick')
}

function jogar5(){
    vez += 1
    if( div[4].click && vez % 2 == 0){
        div[4].style.backgroundImage = "url(X.png)"
        cinco = 'X'
    }else if( div[4].click && vez % 2 == 1){
        div[4].style.backgroundImage = "url(O.png)"
        cinco = 'O'
    }
    preenchido += 1
    div[4].removeAttribute('onclick')
}

function jogar6(){
    vez += 1
    if( div[5].click && vez % 2 == 0){
        div[5].style.backgroundImage = "url(X.png)"
        seis = 'X'
    }else if( div[5].click && vez % 2 == 1){
        div[5].style.backgroundImage = "url(O.png)"
        seis = 'O'
    }
    preenchido += 1
    div[5].removeAttribute('onclick')
}

function jogar7(){
    vez += 1
    if( div[6].click && vez % 2 == 0){
        div[6].style.backgroundImage = "url(X.png)"
        sete = 'X'
    }else if( div[6].click && vez % 2 == 1){
        div[6].style.backgroundImage = "url(O.png)"
        sete = 'O'
    }
    preenchido += 1
    div[6].removeAttribute('onclick')
}

function jogar8(){
    vez += 1
    if( div[7].click && vez % 2 == 0){
        div[7].style.backgroundImage = "url(X.png)"
        oito = 'X'
    }else if( div[7].click && vez % 2 == 1){
        div[7].style.backgroundImage = "url(O.png)"
        oito = 'O'
    }
    preenchido += 1
    div[7].removeAttribute('onclick')
}

function jogar9(){
    vez += 1
    if( div[8].click && vez % 2 == 0){
        div[8].style.backgroundImage = "url(X.png)"
        nove = 'X'
    }else if( div[8].click && vez % 2 == 1){
        div[8].style.backgroundImage = "url(O.png)"
        nove = 'O'
    }
    preenchido += 1
    div[8].removeAttribute('onclick')
}

function teste(a, b, c){
    if(a == 'O' && b == 'O' && c == 'O'){
        vencedor = 'O'
   }else if(a == 'X' && b == 'X' && c == 'X'){
        vencedor = 'X'
   }else if (preenchido == 9 && vencedor != 'O' && vencedor != 'X'){
       vencedor = 'Velha'
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

    if(vencedor != ''){
    var fim =  document.createElement('div')
    var botao = document.createElement('input')
    var x = document.createElement('h2')
    botao.setAttribute('type', 'button')
    botao.setAttribute('value', 'Jogar Novamente')
    botao.setAttribute('onclick', 'window.location.reload()')
    fim.appendChild(x)
    fim.appendChild(botao)
    fim.setAttribute('id', 'fim')
    divjogo.appendChild(fim)
}
    if(vencedor == 'X'){
    x.innerHTML = 'Jogador X ganhou'  
    }else if(vencedor == 'O'){
        x.innerHTML = 'Jogador O ganhou'     
    }else if(vencedor == 'Velha'){   
        x.innerHTML = 'Deu Velha'
    }

}