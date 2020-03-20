
time = document.getElementsByClassName('time')
segundos = document.getElementById('segundos')
minutos = document.getElementById('minutos')

var user_time = prompt("¿Cuanto tiempo dura?", "5");

if (user_time == null || user_time == "") {
    fight_time = 5
} else {
    fight_time = user_time
}


verificador = false
seconds = 0

function togglePause() {
    if (verificador) {
        verificador = false
    } else {
        verificador = true
    }
}


setInterval(() => {
    if (verificador) {
        seconds++

        secs = seconds
        var mins = 0

        while (secs >= 60) {
            mins++
            secs -= 60
        }

        minutos.innerHTML = (mins < 10) ? "0" + mins : mins;
        segundos.innerHTML = (secs < 10) ? "0" + secs : secs;
    }

    if(fight_time <= mins){
        verificador = false
    }
    
}, 1000)


