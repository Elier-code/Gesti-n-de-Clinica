var localStore = "citas"

function recuperarDatosFormulario() {

    var especialidadGCC = document.getElementById("especialidadGCC")
    var fechayhoraGCC = document.getElementById("fechayhoraGCC")
    var estadoPerfilGCC = document.getElementById("estadoPerfilGCC")
    var motivoConsultaGCC = document.getElementById("motivoConsultaGCC")

}

function limpiarFormulario() {
    especialidadGCC.value = ("especialidadGCC").value = ""
    fechayhoraGCC.value = ("fechayhoraGCC").value = ""
    estadoPerfilGCC.value = ("estadoPerfilGCC").value = ""
    motivoConsultaGCC.value = ("motivoConsultaGCC").value = ""

}

function guardar() {
    recuperarDatosFormulario()
    var citas = getJSONDeLocalStore(localStore) 
    const cita = new Citas(getValorSecuenciaCita(), especialidadGCC.value, fechayhoraGCC.value, estadoPerfilGCC.value, motivoConsultaGCC.value)
    citas.push(cita)
    setJSONDeLocalStore(localStore, citas)
    limpiarFormulario()
    alert("Factura ha sido guardada correctamente")
}


//funcion que lista los datos en la tabla
function listarCitas() {
    limpiarTabla()//Evita que se repita la tabla
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    var citas = getJSONDeLocalStore(localStore)
    for (const i in citas) {
        var row = document.createElement("tr")
        var idmedicoGCC = document.createElement("td")
        var especialidadGCC = document.createElement("td")
        var fechayhoraGCC = document.createElement("td")
        var estadoPerfilGCC = document.createElement("td")
        var motivoConsultaGCC = document.createElement("td")

        idmedicoGCC.textContent = citas[i].idmedicoGCC
        especialidadGCC.textContent = citas[i].especialidadGCC
        fechayhoraGCC.textContent = citas[i].fechayhoraGCC
        estadoPerfilGCC.textContent = citas[i].estadoPerfilGCC
        motivoConsultaGCC.textContent = citas[i].motivoConsultaGCC

        row.appendChild(idmedicoGCC)
        row.appendChild(especialidadGCC)
        row.appendChild(fechayhoraGCC)
        row.appendChild(estadoPerfilGCC)
        row.appendChild(motivoConsultaGCC)
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

    this.citas = getJSONDeLocalStore(localStore)
    this.idmedicoGCC = document.getElementById("idmedicoGCC").value
    var indice = buscarIndiceFactura()
    if (indice > -1) {

        citas[indice].especialidadGCC = especialidadGCC.textContent
        citas[indice].fechayhoraGCC = fechayhoraGCC.textContent
        citas[indice].estadoPerfilGCC = estadoPerfilGCC.textContent
        citas[indice].motivoConsultaGCC = motivoConsultaGCC.textContent

    }
    setJSONDeLocalStore(localStore, citas)
    limpiarFormulario()
    alert("Factura ha sido actualizada correctamente")

}

function buscarIndiceCita() {

    var resultado = -1
    for (let i = 0; i < citas.length; i++) {

        if (citas[i].idmedicoGCC == idmedicoGCC) {

            resultado = i
        }

    }
    return resultado

}

function eliminar(){
   
    this.citas = getJSONDeLocalStore(localStore)
    this.idmedicoGCC = document.getElementById("idmedicoGCC").value
    var indice = buscarIndiceCita()
    if (indice > -1) {
        alert("La cita a sido "+ citas[indice].idmedicoGCC + " eliminada")
        citas.splice(indice, 1)
        setJSONDeLocalStore(localStore, citas)
    }
    limpiarFormulario()
}