var localStore = "especialidades"

function recuperarDatosFormulario(){
    this.nomEsp = document.getElementById("nombreEspecialidad")
    this.desEsp = document.getElementById("descripcionEspecialidad")
    this.estadoEsp = document.getElementById("estadoPerfil")
    this.fechaCreacion = document.getElementById("fechaCreacion")
}

function limpiarFormulario(){
    document.getElementById("nombreEspecialidad").value = ""
    document.getElementById("descripcionEspecialidad").value = ""
    document.getElementById("estadoPerfil").value = ""


}

function guardar(){
    recuperarDatosFormulario()
    document.getElementById("fechaCreacion").value = obtenerFechaActual()
    var especialidades = getJSONDeLocalStore(localStore)
    const especialidad = new Especialidades (getValorSecuenciaEspecialidad(), nomEsp.value, desEsp.value, estadoEsp.value, fechaCreacion.value)
    especialidades.push(especialidad)

    setJSONDeLocalStore(localStore, especialidades)
    limpiarFormulario()
    alert("Especialidad agregada con exito")
}

function listarEspecialidades(){
    limpiarTabla()
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    var especialidades = getJSONDeLocalStore(localStore)
    for (const i in especialidades) {
        var fila = document.createElement("tr")
        var id = document.createElement("td")
        var nombre = document.createElement("td")
        var descrip = document.createElement("td")
        var estado = document.createElement("td")
        var creacion = document.createElement("td")

        id.textContent = especialidades[i].idEspecialidad
        nombre.textContent = especialidades[i].nombre
        descrip.textContent = especialidades[i].descripcion
        creacion.textContent = especialidades[i].fechaCreacion
        estado.textContent = especialidades[i].esstadoEspecialidad


        fila.appendChild(id)
        fila.appendChild(nombre)
        fila.appendChild(descrip)
        fila.appendChild(estado)
        fila.appendChild(creacion)
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
    recuperarDatosFormulario()
    this.especialidades = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idEspecialidad").value
    var indice = buscarIndiceEspecialidad()
    if (indice > -1) {

        especialidades[indice].nombreUsuario = nomEsp.value
        especialidades[indice].descripcion = desEsp.value
        especialidades[indice].fechaCreacion = fechaCreacion.value
        especialidades[indice].estadoCuenta = estadoEsp.value

    }
    setJSONDeLocalStore(localStore, especialidades)
    limpiarFormulario()
    alert("El usuario ha sido actualizado correctamente")
}



function eliminar(){
    this.especialidades = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idEspecialidad").value
    var indice = buscarIndiceEspecialidad()
    if (indice > -1) {
        alert("El usuario " + especialidades[indice].idUsuario + " eliminado")
        especialidades.splice(indice, 1)
        setJSONDeLocalStore(localStore, especialidades)
    }
    limpiarFormulario()
}

function buscarIndiceEspecialidad() {
    console.log(id)
    var resultado = -1
    for (let i = 0; i < especialidades.length; i++) {

        if (especialidades[i].idEspecialidad == id) {

            resultado = i
        }

    }
    return resultado

}