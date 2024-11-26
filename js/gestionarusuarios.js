var localStore = "usuarios"


function recuperarDatosFormulario(){
    this.nomUser = document.getElementById("nombreUsuario")
    this.passUser = document.getElementById("contraseña")
    this.fechaCreacion = document.getElementById("fechaCreacion")
    this.estadoCuenta = document.getElementById("estadoCuenta")
    this.rol = document.getElementById("rol")
}

function limpiarFormulario(){
    document.getElementById("nombreUsuario").value = ""
    document.getElementById("contraseña").value = ""
    
    document.getElementById("estadoCuenta").value = ""
    document.getElementById("rol").value = ""
    document.getElementById("idUsuario").value = ""
}

function guardar(){
    recuperarDatosFormulario()
    var usuarios = getJSONDeLocalStore(localStore)
    const usuario = new Usuarios(getValorSecuenciaUsuario(), nomUser.value, passUser.value, rol.value,estadoCuenta.value, fechaCreacion.value)
    usuarios.push(usuario)

    setJSONDeLocalStore(localStore, usuarios)
    limpiarFormulario()
    alert("El usuario ha sido guardado correctamente")
}


function listarUsuarios(){
    limpiarTabla()
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    const usuarios = getJSONDeLocalStore(localStore)
    for (const i in usuarios) {
        var fila = document.createElement("tr")
        var id = document.createElement("td")
        var nombre = document.createElement("td")
        var contraseña = document.createElement("td")
        var creacion = document.createElement("td")
        var estado = document.createElement("td")
        var rolUser = document.createElement("td")

        id.textContent = usuarios[i].idUsuario
        nombre.textContent = usuarios[i].nombreUsuario
        contraseña.textContent = usuarios[i].contraseña
        creacion.textContent = usuarios[i].fechaCreacion
        estado.textContent = usuarios[i].estadoCuenta
        rolUser.textContent = usuarios[i].rol

        fila.appendChild(id)
        fila.appendChild(nombre)
        fila.appendChild(contraseña)
        fila.appendChild(rolUser)
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
    this.usuarios = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idUsuario").value
    var indice = buscarIndiceUsuario()
    if (indice > -1) {

        usuarios[indice].nombreUsuario = nomUser.value
        usuarios[indice].contraseña = passUser.value
        usuarios[indice].fechaCreacion = fechaCreacion.value
        usuarios[indice].estadoCuenta = estadoCuenta.value
        usuarios[indice].rol = rol.value

    }
    setJSONDeLocalStore(localStore, usuarios)
    limpiarFormulario()
    alert("El usuario ha sido actualizado correctamente")
}

function eliminar(){
    this.usuarios = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idUsuario").value
    var indice = buscarIndiceUsuario()
    if (indice > -1) {
        alert("El usuario " + usuarios[indice].idUsuario + " eliminado")
        usuarios.splice(indice, 1)
        setJSONDeLocalStore(localStore, usuarios)
    }
    limpiarFormulario()
}



function buscarIndiceUsuario() {

    var resultado = -1
    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].idUsuario == id) {

            resultado = i
        }

    }
    return resultado

}