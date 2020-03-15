    
    time = document.getElementsByClassName('time')
    segundos = document.getElementById('segundos')
    minutos = document.getElementById('minutos')

    verificador = false
    seconds = 0

    function togglePause(){
        if (verificador){
            verificador = false
        }else{
            verificador = true
        }
    }


    setInterval(() => {
        if(verificador){
            seconds++

            secs = seconds
            mins = 0

            while (secs >= 60){
                mins++
                secs -= 60
            }

            minutos.innerHTML = (mins<10)? "0" + mins : mins;
            segundos.innerHTML = (secs<10)? "0" + secs : secs;
        }
    }, 1000)





