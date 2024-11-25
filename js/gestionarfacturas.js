var localStore = "facturas"

function recuperarDatosFormulario() {

    var monto = document.getElementById("monto")
    var fechaEmision = document.getElementById("fechaEmision")
    var metodoPago = document.getElementById("metodoPago")
    var estadoPago = document.getElementById("estadoPago")
    var concepto = document.getElementById("concepto")
    var descuento = document.querySelector('input[name="descuento"]:checked')
    var fechaVencimiento = document.getElementById("fechaVencimiento")
    var cantDes = document.getElementById("porcentajeDescuento")

}

function limpiarFormulario() {
    var descuento = document.querySelector('input[name="descuento"]:checked')
    var cantDes = document.getElementById("porcentajeDescuento")
    monto.value = ""
    fechaEmision.value = ""
    metodoPago.value = ""
    estadoPago.value = ""
    concepto.value = ""
    descuento.value = ""
    fechaVencimiento.value = ""
    cantDes.value = ""

}

function guardar() {
    recuperarDatosFormulario()
    var facturas = getJSONDeLocalStore(localStore)
    var descuento = document.querySelector('input[name="descuento"]:checked')

    var desc
    if (descuento.value == "si") {
        var cantDes = document.getElementById("porcentajeDescuento")
        desc = cantDes.value
    }
    factura = new Facturas(getValorSecuenciaFactura(), monto.value, fechaEmision.value, metodoPago.value, estadoPago.value, concepto.value, desc, fechaVencimiento.value)
    facturas.push(factura)

    setJSONDeLocalStore(localStore, facturas)
    limpiarFormulario()
    alert("Factura ha sido guardada correctamente")
}


//funcion que lista los datos en la tabla
function listarFacturas() {
    limpiarTabla()//Evita que se repita la tabla
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    var facturas = getJSONDeLocalStore(localStore)
    for (const i in facturas) {
        var row = document.createElement("tr")
        var id = document.createElement("td")
        var monto = document.createElement("td")
        var emision = document.createElement("td")
        var metodo = document.createElement("td")
        var estado = document.createElement("td")
        var concepto = document.createElement("td")
        var descuento = document.createElement("td")
        var vencimiento = document.createElement("td")

        id.textContent = facturas[i].idFactura
        monto.textContent = facturas[i].monto
        emision.textContent = facturas[i].fechaEmision
        metodo.textContent = facturas[i].metodoPago
        estado.textContent = facturas[i].estadoPago
        concepto.textContent = facturas[i].concepto
        descuento.textContent = facturas[i].descuento
        vencimiento.textContent = facturas[i].fechaVencimiento

        row.appendChild(id)
        row.appendChild(monto)
        row.appendChild(emision)
        row.appendChild(metodo)
        row.appendChild(estado)
        row.appendChild(concepto)
        row.appendChild(descuento)
        row.appendChild(vencimiento)
        tbody.appendChild(row)
    }
    listar.appendChild(tbody)
}
// Esta funcion basicamente elimina todos los hijos del elemento Tbody lo que da la ilucion de que limpia la tabla
function limpiarTabla() {
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    tbody.innerHTML = ''
}

function actualizar() {
    recuperarDatosFormulario()
    this.facturas = getJSONDeLocalStore(localStore)
    var descuento = document.querySelector('input[name="descuento"]:checked')
    this.id = document.getElementById("idFactura").value
    var indice = buscarIndiceFactura()
    if (indice > -1) {
        var desc
        if (descuento.value == "si") {
            var cantDes = document.getElementById("porcentajeDescuento")
            desc = cantDes.value
        }
        facturas[indice].monto = monto.value
        facturas[indice].fechaEmision = fechaEmision.value
        facturas[indice].metodoPago = metodoPago.value
        facturas[indice].estadoPago = estadoPago.value
        facturas[indice].concepto = concepto.value
        facturas[indice].descuento = desc
        facturas[indice].fechaVencimiento = fechaVencimiento.value
    }
    setJSONDeLocalStore(localStore, facturas)
    limpiarFormulario()
    alert("Factura ha sido actualizada correctamente")

}

function buscarIndiceFactura() {

    var resultado = -1
    for (let i = 0; i < facturas.length; i++) {

        if (facturas[i].idFactura == id) {

            resultado = i
        }

    }
    return resultado

}

function eliminar(){
    this.facturas = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idFactura").value
    var indice = buscarIndiceFactura()
    if (indice > -1) {
        alert("La factura "+ facturas[indice].idFactura + " eliminado")
        facturas.splice(indice, 1)
        setJSONDeLocalStore(localStore, facturas)
    }
    limpiarFormulario()
}