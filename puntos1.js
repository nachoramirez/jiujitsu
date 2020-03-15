
const puntos1 = document.getElementById('cantidad-de-puntos_1')
const ven1 = document.getElementById('ventajas_1')
const pen1 = document.getElementById('penalizaciones_1')

var puntos_uno = 0 
var ventajas_uno = 0
var penalizaciones_uno = 0


function puntoUno(){
    puntos_uno++
    puntos1.innerHTML = puntos_uno
}

function ventajasUno(){
    ventajas_uno++
    ven1.innerHTML = ventajas_uno
}

function penalizacionesUno(){
    penalizaciones_uno--
    pen1.innerHTML = penalizaciones_uno
}

function restarPuntosUno(){
    puntos_uno--
    puntos1.innerHTML = puntos_uno
}

function restarVenUno(){
    ventajas_uno--
    ven1.innerHTML = ventajas_uno
}


function restarPenUno(){
    penalizaciones_uno++
    pen1.innerHTML = penalizaciones_uno
}