
time = document.getElementsByClassName('time')
segundos = document.getElementById('segundos')
minutos = document.getElementById('minutos')
audio = document.getElementById("audio");

started = false
verificador = false
seconds = 0

function togglePause() {
    if (!started) {
        var user_time = prompt("¿Tiempo de lucha?", "5",type="number");

        if (user_time == null || user_time == "") {
            fight_time = 5
        } else {
            fight_time = user_time
        }
        started = true
        verificador = true

    } else {
        if (verificador) {
            verificador = false
        } else {
            verificador = true
        }
    }
}


setInterval(() => {
    if (verificador) {
        seconds++

        secs = seconds
        var mins = 0

        while (secs >= 10) {
            mins++
            secs -= 10
        }

        minutos.innerHTML = (mins < 10) ? "0" + mins : mins;
        segundos.innerHTML = (secs < 10) ? "0" + secs : secs;

        if (fight_time <= mins) {
            verificador = false
            audio.play()
            document.getElementById("resultados").style.visibility = "visible";
        }
    }

    

}, 1000)


function MostrarResultados(){
    console.log('Al luchador blanco:')
    for(i=0;i<Acciones1.length;i++){
        console.log('    ' + Acciones1[i])
    }
    console.log('Al luchador amarillo:')
    for(i=0;i<Acciones2.length;i++){
        console.log('    ' + Acciones2[i])
    }
}