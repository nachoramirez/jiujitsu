const puntos2 = document.getElementById('cantidad-de-puntos_2')
const ven2 = document.getElementById('ventajas_2')
const pen2 = document.getElementById('penalizaciones_2')

var puntos_dos = 0
var ventajas_dos = 0
var penalizaciones_dos = 0
var Acciones2 = []

function SumarDos2() {
    puntos_dos += 2
    puntos2.innerHTML = puntos_dos
    accion = "Se sumaron dos puntos"
    Acciones2.push(accion)
}

function SumarTres2() {
    puntos_dos += 3
    puntos2.innerHTML = puntos_dos
    accion = "Se sumaron tres puntos"
    Acciones2.push(accion)
}

function SumarCuatro2() {
    puntos_dos += 4
    puntos2.innerHTML = puntos_dos
    accion = "Se sumaron cuatro puntos"
    Acciones2.push(accion)
}

function ventajasDos() {
    ventajas_dos++
    ven2.innerHTML = ventajas_dos
    accion = "Se sumo una ventaja"
    Acciones2.push(accion)
}

function penalizacionesDos() {
    penalizaciones_dos--
    pen2.innerHTML = penalizaciones_dos
    accion = "Se penalizo"
    Acciones2.push(accion)
}

function restarPuntosDos() {
    puntos_dos--
    puntos2.innerHTML = puntos_dos
    accion = "Se resto un punto"
    Acciones2.push(accion)
}

function restarVenDos() {
    ventajas_dos--
    ven2.innerHTML = ventajas_dos
    accion = "Se resto una ventaja"
    Acciones2.push(accion)
}


function restarPenDos() {
    penalizaciones_dos++
    pen2.innerHTML = penalizaciones_dos
    accion = "Se resto la penalizacion"
    Acciones2.push(accion)
}