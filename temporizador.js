const time = document.getElementById('time')
segundos = document.getElementById('segundos')
minutos = document.getElementById('minutos')


class Cronometro{
    constructor(){
        this.seconds = 0
        this.pause = true
        this.togglePause = this.togglePause.bind(this) 
        this.AgregarClick()
    }

    AgregarClick(){
        time.addEventListener('click', this.togglePause, false)
    }

    togglePause(){
        console.log('xd')
    }

    StartTime() {
        setInterval(() => {
            this.seconds++

            var secs = this.seconds
            var mins = 0

            while (secs >= 60){
                mins++
                secs -= 60
            }

            minutos.innerHTML = (mins<10)? "0" + mins : mins;
            segundos.innerHTML = (secs<10)? "0" + secs : secs;

        }, 1000)
    }
}

function empezarCronometro(){
    window.cronometro = new Cronometro()
}


empezarCronometro()