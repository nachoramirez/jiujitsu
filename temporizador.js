
time = document.getElementsByClassName('time')
segundos = document.getElementById('segundos')
minutos = document.getElementById('minutos')
audio = document.getElementById("audio");

started = false
verificador = false
seconds = 0
user_time = 0

async function userInput() {
    const { value: time } = await Swal.fire({
        title: 'tiempo de lucha',
        input: 'number',
        confirmButtonText: 'Aceptar',
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
    },)

      if(time){
          user_time = `${time}`
      }
}


function togglePause() {
    if (!started) {        
        userInput()      
        setInterval(() => {fight_time = user_time},1000)  
        started = true        

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

        while (secs >= 60) {
            mins++
            secs -= 60
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


function MostrarResultados() {
    console.log('Al luchador blanco:')
    for (i = 0; i < Acciones1.length; i++) {
        console.log('    ' + Acciones1[i])
    }
    console.log('Al luchador amarillo:')
    for (i = 0; i < Acciones2.length; i++) {
        console.log('    ' + Acciones2[i])
    }
}


function Empezo() {
    if(verificador == false){
        return false
    }else{
        return true
    }
}