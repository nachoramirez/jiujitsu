
function StartTime() {
    seconds = 0
    segundos = document.getElementById('segundos')
    minutos = document.getElementById('minutos')

    cronometro = setInterval(() => {
        seconds++

        secs = seconds
        mins = 0

        while (secs >= 60){
            mins++
            secs -= 60
        }

        minutos.innerHTML = (mins<10)? "0" + mins : mins;
        segundos.innerHTML = (secs<10)? "0" + secs : secs;

    }, 1000)
}

StartTime()
