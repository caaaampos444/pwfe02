'use strict'
const forma1=document.getElementById('forma1')
function mudarCor(){
    forma1.classList.toggle('vermelho')
}
function mudarForma(){
    forma2.classList.toggle('circulo')
}
function desaparecer(){
    forma3.classList.toggle('preto')
}
function girar(){
    forma4.classList.toggle('girar')
}
function imagem(){
    forma5.classList.toggle('imagem')
}
function vertical(){
    forma6.classList.toggle('vertical')
}
function inverter(){
    body.classList.toggle('branco')
    forma1.classList.toggle('branco')
    forma2.classList.toggle('branco')
    forma3.classList.toggle('branco')
    forma4.classList.toggle('branco')
    forma5.classList.toggle('branco')
    forma6.classList.toggle('branco')
    forma7.classList.toggle('branco')
    forma8.classList.toggle('branco')
    item1.classList.toggle('cinza')
    item2.classList.toggle('cinza')
    item3.classList.toggle('cinza')
    item4.classList.toggle('cinza')
    item5.classList.toggle('cinza')
    item6.classList.toggle('cinza')
    item7.classList.toggle('cinza')
    item8.classList.toggle('cinza')
}
function acabar(){
    container.classList.toggle('none')
    container2.classList.toggle('acabar')
}
forma1.addEventListener('click',mudarCor)
forma2.addEventListener('click',mudarForma)
forma3.addEventListener('click',desaparecer)
forma4.addEventListener('click',girar)
forma5.addEventListener('click',imagem)
forma6.addEventListener('click',vertical)
forma7.addEventListener('click',inverter)
forma8.addEventListener('click',acabar)