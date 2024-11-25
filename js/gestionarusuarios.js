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
    document.getElementById("fechaCreacion").value = ""
    document.getElementById("estadoCuenta").value = ""
    document.getElementById("rol").value = ""
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