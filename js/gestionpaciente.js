var localStore = "pacientes"


function recuperarDatosFormulario(){
    this.nomGP = document.getElementById("nameGP")
    this.fechaNacimiento = document.getElementById("fechaNacimientoGP")
    this.direccion = document.getElementById("direccionGP")
    this.phone = document.getElementById("phoneGP")
    this.email = document.getElementById("emailGP")
    this.perfilState = document.getElementById("perfilStateGP")
    this.nameUser = document.getElementById("nameUserGP")
    this.contrasenha = document.getElementById("contrasenhaGP")

}

function limpiarFormulario(){
    document.getElementById("nameGP").value = ""
    document.getElementById("fechaNacimientoGP").value = ""
    document.getElementById("direccionGP").value = ""
    document.getElementById("phoneGP").value = ""
    document.getElementById("emailGP").value = ""
    document.getElementById("perfilStateGP").value = ""
    document.getElementById("nameUserGP").value = ""
    document.getElementById("contrasenhaGP").value = ""
    document.getElementById("idUserGP").value = ""

}

function guardar(){
    recuperarDatosFormulario()
    var pacientes = getJSONDeLocalStore(localStore)
    const paciente = new Pacientes(getValorSecuenciaPaciente(), nomGP.value,
     fechaNacimiento.value, direccion.value, phone.value, email.value, perfilState.value, nameUser.value, contrasenha.value)
    
     pacientes.push(paciente)

    setJSONDeLocalStore(localStore, pacientes)
    limpiarFormulario()
    alert("El paciente ha sido guardado correctamente")
}


function listarUsuarios(){
    limpiarTabla()
    const listar = document.getElementById("lista")
    const tbody = listar.querySelector('tbody')
    const pacientes = getJSONDeLocalStore(localStore)
    for (const i in pacientes) {
        var fila = document.createElement("tr")
        var id = document.createElement("td")
        var nombre = document.createElement("td")
        var fecha = document.createElement("td")
        var direccion = document.createElement("td")
        var celular = document.createElement("td")
        var correo = document.createElement("td")
        var perfil = document.createElement("td")
        var user = document.createElement("td")
        var contrasena = document.createElement("td")

        id.textContent = pacientes[i].idUserGP
        nombre.textContent = pacientes[i].nameGP
        fecha.textContent = pacientes[i].fechaNacimientoGP
        direccion.textContent = pacientes[i].direccionGP
        celular.textContent = pacientes[i].phoneGP
        correo.textContent = pacientes[i].emailGP
        perfil.textContent = pacientes[i].perfilStateGP
        user.textContent = pacientes[i].nameUserGP
        contrasena.textContent = pacientes[i].contrasenhaGP


        fila.appendChild(id)
        fila.appendChild(nombre)
        fila.appendChild(fecha)
        fila.appendChild(direccion)
        fila.appendChild(celular)
        fila.appendChild(correo)
        fila.appendChild(perfil)
        fila.appendChild(user)
        fila.appendChild(contrasena)

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
    this.pacientes = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idUserGP").value
    var indice = buscarIndicePacientes()
    if (indice > -1) {

        pacientes[indice].nombre = nameGP.value
        pacientes[indice].fecha = fechaNacimientoGP.value
        pacientes[indice].direccion = direccionGP.value
        pacientes[indice].celular = phoneGP.value
        pacientes[indice].correo = emailGP.value
        pacientes[indice].perfilStateGP = perfilStateGP.value
        pacientes[indice].user = nameUserGP.value
        pacientes[indice].contrasena = contrasenhaGP.value
    }
    setJSONDeLocalStore(localStore, pacientes)
    limpiarFormulario()
    alert("El paciente ha sido actualizado correctamente")
}

function eliminar(){
    this.pacientes = getJSONDeLocalStore(localStore)
    this.id = document.getElementById("idUserGP").value
    var indice = buscarIndicePacientes()
    if (indice > -1) {
        alert("El paciente " + pacientes[indice].idUserGP + " eliminado")
        pacientes.splice(indice, 1)
        setJSONDeLocalStore(localStore, pacientes)
    }
    limpiarFormulario()
}


function buscarIndicePacientes() {

    var resultado = -1
    for (let i = 0; i < pacientes.length; i++) {

        if (pacientes[i].idUserGP == id) {

            resultado = i
        }

    }
    return resultado

}