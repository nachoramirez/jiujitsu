
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
    })

    if (time) {
        user_time = `${time}`
    }
}


function togglePause() {
    if (!started) {
        userInput()
        setInterval(() => { fight_time = user_time }, 1000)
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

        while (secs >= 6) {
            mins++
            secs -= 6
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


function MostrarResultados1() {
    switch (ganoBlanco()) {
        case 0: icono = 'error'
            titulo = 'Perdio'
            break
        case 1: icono = 'success'
            titulo = 'gano'
            break
        case 2: icono = 'question'
            titulo = 'Empate'
            break
    }

    texto = Acciones1

    Swal.fire({
        title: titulo,
        icon: icono,
        text: texto,
    })
}

function MostrarResultados2() {
    switch (ganoBlanco()) {
        case 0: icono = 'success'
            titulo = 'gano'
            break
        case 1: icono = 'error'
            titulo = 'Perdio'
            break
        case 2: icono = 'question'
            titulo = 'Empate'
            break
    }

    texto = Acciones2

    Swal.fire({
        title: titulo,
        icon: icono,
        text: texto,
    })
}


function Empezo() {
    if (verificador == false) {
        return false
    } else {
        return true
    }
}

function info() {
    Swal.fire({
        title: 'Amigos del tatame!',
        heightAuto: false,
        text: 'Esta app web fue pensada como una herramienta para ser utilizada en nuestros treinos diarios. Es ideal para cuando tenemos la necesidad de puntuar determinadas luchas (generalmente esto sucede en época de competencias) y/o cuando queremos practicar arbitraje. Es de muy fácil utilización, igualmente a continuación algunas instrucciones: ' +
            'Tocando el cronometro, se programa el tiempo. Tocándolo de nuevo arranca/pausa. ' +
            'Ante una equivocación tocando el numero en la placa lo resta de a uno (si queremos borrar 2 puntos, tocamos 2 veces). Si el cronometro está en pausa también se puede restar.' +
            'Para una nueva lucha, botón de reinicio o actualizando página.' +
            'Al final del tiempo, se visualizarán los puntos otorgados por orden.' +
            'Si tenés el traductor activo sacalo para una mejor visualización.' +
            'Espero que les sea útil. OSSS',
        confirmButtonText: 'Aceptar',
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
    })
}

