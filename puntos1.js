
const puntos1 = document.getElementById('cantidad-de-puntos_1')
const ven1 = document.getElementById('ventajas_1')
const pen1 = document.getElementById('penalizaciones_1')

var puntos_uno = 0
var ventajas_uno = 0
var penalizaciones_uno = 0

var Acciones1 = []


function verificarCero(punto) {
    if (punto == 0)  {
        return false
    } else {
        return true
    }
}

function SumarDos1() {
    if(Empezo()){
        puntos_uno += 2
        puntos1.innerHTML = puntos_uno
        accion = "Se sumaron dos puntos"
        Acciones1.push(accion)
    }
}

function SumarTres1() {
    if(Empezo()){
    puntos_uno += 3
    puntos1.innerHTML = puntos_uno
    accion = "Se sumaron tres puntos"
    Acciones1.push(accion)
    }
}

function SumarCuatro1() {
    if(Empezo()){
    puntos_uno += 4
    puntos1.innerHTML = puntos_uno
    accion = "Se sumaron cuatro puntos"
    Acciones1.push(accion)
    }
}

function ventajasUno() {
    if(Empezo()){
    ventajas_uno++
    ven1.innerHTML = ventajas_uno
    accion = "Se sumo una ventaja"
    Acciones1.push(accion)
    }
}

function penalizacionesUno() {
    if(Empezo()){
    penalizaciones_uno--
    pen1.innerHTML = penalizaciones_uno
    accion = "Se penalizo"
    Acciones1.push(accion)
    }
}

function restarPuntosUno() {
    if (verificarCero(puntos_uno)) {
        puntos_uno--
        puntos1.innerHTML = puntos_uno
        accion = "Se resto un punto"
        Acciones1.push(accion)
    }
}

function restarVenUno() {
    if (verificarCero(ventajas_uno)) {
        ventajas_uno--
        ven1.innerHTML = ventajas_uno
        accion = "Se resto una ventaja"
        Acciones1.push(accion)
    }
}


function restarPenUno() {
    if (verificarCero(penalizaciones_uno)) {
        penalizaciones_uno++
        pen1.innerHTML = penalizaciones_uno
        accion = "Se resto la penalizacion"
        Acciones1.push(accion)
    }
}

function ganoBlanco(){
    if(puntos_uno > puntos_dos){
        return 1
    }else if(puntos_uno == puntos_dos){
        if(ventajas_uno > ventajas_dos){
            return 1
        }else if(ventajas_uno == ventajas_dos){
            if(penalizaciones_uno > penalizaciones_dos){
                return 1
            }else if(penalizaciones_uno == penalizaciones_dos){
                return 2
            }else{
                return 0
            }
        }else{
            return 0
        }
    }else return 0
}