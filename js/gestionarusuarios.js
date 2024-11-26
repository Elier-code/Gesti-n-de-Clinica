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
    this.usuarios = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idUsuario").value
    var indice = buscarIndiceUsuario()
    if (indice > -1) {

        usuarios[i].nombreUsuario = nombre.textContent
        usuarios[i].contraseña = contraseña.textContent
        usuarios[i].fechaCreacion = creacion.textContent
        usuarios[i].estadoCuenta = estado.textContent
        usuarios[i].rol = rolUser.textContent

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




function iniciarSesion() {

    var usuario = document.getElementById("users")
    var password = document.getElementById("password")

    var usuarios = getJSONDeLocalStore(localStore)

    sw = false

    for (const usuarioJSON of usuarios) {
        console.log(usuarios)
        if (usuario.value == usuarioJSON.nombreUsuario &&
            password.value == usuarioJSON.contraseña )  {

            switch(usuarioJSON.rol) {

                case 'paciente':

                    window.location.href = '../html/principalpaciente.html'
                    break

                case 'administrador':

                    window.location.href = '../html/paginaadmin.html'
                    break
                case 'medico':
                    window.location.href = '../html/principoalmedicos.html'
                    break

            }

            sw = true

            break
        }

    }


    if (!sw)
        alert("Usuario y/o password errado")

}