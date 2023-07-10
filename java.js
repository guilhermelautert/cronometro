const relogio = document.querySelector(".relogio")
const startBtn = document.querySelector('.iniciar')
const pauseBtn = document.querySelector('.pausar')
const resetBtn = document.querySelector('.zerar')
let horas = 0
let segundos = 0
let minutos = 0
let timer;


function formataNumeros(segundos){
    if(segundos < 10){
        return `0${segundos}`
    } else{
        return  `${segundos}`
    }
}

function startCont(){
    timer = setInterval(function(){

        segundos++
        if(segundos === 60){
            minutos++
            segundos = 0
        }

        if(minutos === 60){
            horas++
            minutos = 0
        }

        relogio.innerHTML = (formataNumeros(horas) + " : " + formataNumeros(minutos) + " : " + formataNumeros(segundos))
    },1000)

}

startBtn.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.style.color = "#000000"
    startCont()
})

pauseBtn.addEventListener('click', function(){
    relogio.style.color = "#8B0000"
    clearInterval(timer)
})

resetBtn.addEventListener('click', function(){
    clearTimeout(timer)
    relogio.style.color = "#000000"
    relogio.innerHTML = "00 : 00 : 00"
    segundos = 0
    minutos = 0
    horas = 0
})
