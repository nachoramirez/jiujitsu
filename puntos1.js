
const puntos1 = document.getElementById('cantidad-de-puntos_1')
const ven1 = document.getElementById('ventajas_1')
const pen1 = document.getElementById('penalizaciones_1')

var puntos_uno = 0 
var ventajas_uno = 0
var penalizaciones_uno = 0

var Acciones1 =[]


function SumarDos1(){
    puntos_uno += 2
    puntos1.innerHTML = puntos_uno
    accion = "Se sumaron dos puntos"
    Acciones1.push(accion)
}

function SumarTres1(){
    puntos_uno += 3
    puntos1.innerHTML = puntos_uno
    accion = "Se sumaron tres puntos"
    Acciones1.push(accion)
}

function SumarCuatro1(){
    puntos_uno += 4
    puntos1.innerHTML = puntos_uno
    accion = "Se sumaron cuatro puntos"
    Acciones1.push(accion)
}

function ventajasUno() {
    ventajas_uno++
    ven1.innerHTML = ventajas_uno
    accion = "Se sumo una ventaja"
    Acciones1.push(accion)
}

function penalizacionesUno() {
    penalizaciones_uno--
    pen1.innerHTML = penalizaciones_uno
    accion = "Se penalizo"
    Acciones1.push(accion)
}

function restarPuntosUno() {
    puntos_uno--
    puntos1.innerHTML = puntos_uno
    accion = "Se resto un punto"
    Acciones1.push(accion)
}

function restarVenUno() {
    ventajas_uno--
    ven1.innerHTML = ventajas_uno
    accion = "Se resto una ventaja"
    Acciones1.push(accion)
}


function restarPenUno() {
    penalizaciones_uno++
    pen1.innerHTML = penalizaciones_uno
    accion = "Se resto la penalizacion"
    Acciones1.push(accion)
}