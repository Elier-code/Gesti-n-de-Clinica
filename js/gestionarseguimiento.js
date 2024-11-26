var localStore = "seguimiento"


function recuperarDatosFormulario(){
    this.fechaConsulta = document.getElementById("fechaConsultaSHM")
    this.tratament = document.getElementById("tratamentSHM")
    this.diagnostico = document.getElementById("diagnosticoSHM")
    this.notas = document.getElementById("notasSHM")
}

function limpiarFormulario(){
    document.getElementById("fechaConsultaSHM").value = ""
    document.getElementById("tratamentSHM").value = ""
    document.getElementById("diagnosticoSHM").value = ""
    document.getElementById("notasSHM").value = ""
    document.getElementById("idEstSHM").value = ""
}

function guardar(){
    recuperarDatosFormulario()
    var seguimientos = getJSONDeLocalStore(localStore)
    const seguimiento = new Seguimientos(getValorSecuenciaHistorial(), fechaConsulta.value, tratament.value, 
    diagnostico.value, notas.value)
    seguimientos.push(seguimiento)

    setJSONDeLocalStore(localStore, seguimientos)
    limpiarFormulario()
    alert("El seguimiento ha sido guardado correctamente")
}


function listarSeguimientos(){
    limpiarTabla()
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    const seguimientos = getJSONDeLocalStore(localStore)
    for (const i in seguimientos) {
        var fila = document.createElement("tr")
        var id = document.createElement("td")
        var fecha = document.createElement("td")
        var tratamiento = document.createElement("td")
        var diagnosticos = document.createElement("td")
        var nota = document.createElement("td")

        id.textContent = seguimientos[i].idEstSHM
        fecha.textContent = seguimientos[i].fechaConsultaSHM
        tratamiento.textContent = seguimientos[i].tratamentSHM
        diagnosticos.textContent = seguimientos[i].diagnosticoSHM
        nota.textContent = seguimientos[i].notasSHM

        fila.appendChild(id)
        fila.appendChild(fecha)
        fila.appendChild(tratamiento)
        fila.appendChild(diagnosticos)
        fila.appendChild(nota)
        tbody.appendChild(fila)
    }
    listar.appendChild(tbody)
}


function limpiarTabla() {
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    tbody.innerHTML = ''
}

function actualizar(){
    this.seguimientos = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idEstSHM").value
    var indice = buscarIndiceSeguimiento()
    if (indice > -1) {

        seguimientos[i].fechaConsultaSHM = fecha.textContent
        seguimientos[i].tratamentSHM = tratamiento.textContent
        seguimientos[i].diagnosticoSHM = diagnosticos.textContent
        seguimientos[i].notasSHM = nota.textContent
    }
    setJSONDeLocalStore(localStore, seguimientos)
    limpiarFormulario()
    alert("El seguimiento ha sido actualizado correctamente")
}

function eliminar(){
    this.seguimientos = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idEstSHM").value
    var indice = buscarIndiceSeguimiento()
    if (indice > -1) {
        alert("El seguimiento " + seguimientos[indice].idEstSHM + " eliminado")
        seguimientos.splice(indice, 1)
        setJSONDeLocalStore(localStore, seguimientos)
    }
    limpiarFormulario()
}



function buscarIndiceSeguimiento() {

    var resultado = -1
    for (let i = 0; i < seguimientos.length; i++) {

        if (seguimientos[i].idEstSHM == id) {

            resultado = i
        }

    }
    return resultado

}