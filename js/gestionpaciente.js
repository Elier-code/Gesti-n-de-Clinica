var nombreLocalStore = ""

function recuperarDatosFormulario() {

    var idUserGP = document.getElementById("idUserGP")
    var nameGP = document.getElementById("nameGP")
    var fechaNacimientoGP = document.getElementById("fechaNacimientoGP")
    var direccionGP = document.getElementById("direccionGP")
    var phoneGP = document.getElementById("phoneGP")
    var emailGP = document-getElementById("emailGP")
}

function limpiarFormulario() {

    idUserGP.value = ''
    nameGP.value = ''
    fechaNacimientoGP.value = ''
    direccionGP.value = ''
    phoneGP.value = ''
    emailGP.value = ''
    idUserGP.focus()

}

function guardar() {

    recuperarDatosFormulario()

    paciente = new Paciente(idUserGP.value, nameGP.value,
        fechaNacimientoGP.value, direccionGP.value, phoneGP.value, emailGP.value)

    var pacientes = getJSONDeLocalStore(nombreLocalStore)

    pacientes.push(paciente)

    setJSONDeLocalStore(nombreLocalStore, pacientes)

    limpiarFormulario()

    alert("Pacientes ha sido guardado correctamente")

}

function consultar() {

    recuperarDatosFormulario()

    this.pacientes = getJSONDeLocalStore(nombreLocalStore)

    var indicePacientes = buscarIndicePacientes()

    if (indicePacientes > -1) {

        nameGP.value = pacientes[indicePacientes].nameGP
        fechaNacimientoGP.value = pacientes[indicePacientes].fechaNacimientoGP
        direccionGP.value = pacientes[indicePacientes].direccionGP
        phoneGP.value = pacientes[indicePacientes].phoneGP
        emailGP.value = pacientes[indicePacientes].emailGP

    }


}

function actualizar() {

    recuperarDatosFormulario()

    this.pacientes = getJSONDeLocalStore(nombreLocalStore)

    var indicePacientes = buscarIndicePacientes()

    if (indicePacientes > -1) {

        pacientes[indicePacientes].nameGP = nameGP.value
        pacientes[indicePacientes].fechaNacimientoGP = fechaNacimientoGP.value
        pacientes[indicePacientes].direccionGP = direccionGP.value
        pacientes[indicePacientes].phoneGP = phoneGP.value
        pacientes[indicePacientes].emailGP = emailGP.value
    }


    setJSONDeLocalStore(nombreLocalStore,pacientes)

    limpiarFormulario()

    alert("Pacientes ha sido actualizado correctamente")


}

function buscarIndicePacientes() {

    var resultado = -1

    for (let i = 0; i < pacientes.length; i++) {

        if (pacientes[i].idUserGP == idUserGP.value) {

            resultado = i
        }

    }

    return resultado

}

function eliminar() {

    var estudiantes = getJSONDeLocalStore(nombreLocalStore)

    var indiceEstudiantes = buscarIndiceEstudiantes()

    if (indiceEstudiantes > -1) {

        alert("Estudiante" + estudiantes[indiceEstudiantes].identificacion + " eliminado")

        estudiantes.splice(indiceEstudiantes, 1)

        setJSONDeLocalStore(nombreLocalStore, estudiantes)


    }

    limpiarFormulario()


}