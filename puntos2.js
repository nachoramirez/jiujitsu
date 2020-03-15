const puntos2 = document.getElementById('cantidad-de-puntos_2')
const ven2 = document.getElementById('ventajas_2')
const pen2 = document.getElementById('penalizaciones_2')

var puntos_dos = 0 
var ventajas_dos = 0
var penalizaciones_dos = 0

function puntosDos(){
    puntos_dos++
    puntos2.innerHTML = puntos_dos
}

function ventajasDos(){
    ventajas_dos++
    ven2.innerHTML = ventajas_dos
}

function penalizacionesDos(){
    penalizaciones_dos--
    pen2.innerHTML = penalizaciones_dos
}

function restarPuntosDos(){
    puntos_dos--
    puntos2.innerHTML = puntos_dos
}

function restarVenDos(){
    ventajas_dos--
    ven2.innerHTML = ventajas_dos
}


function restarPenDos(){
    penalizaciones_dos++
    pen2.innerHTML = penalizaciones_dos
}