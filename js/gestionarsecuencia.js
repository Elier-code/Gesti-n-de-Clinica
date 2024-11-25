/*Este archivo genera los ids autogenerados y los almacena en un solo sitio  */
nombreLocalStore = 'secuencia'

function getValorSecuenciaEspecialidad(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroEspecialidades += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)
    return secuencias[0].autonumeroEspecialidades
}

function getValorSecuenciaMedico(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroMedico += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)

    return secuencias[0].autonumeroMedico
}

function getValorSecuenciaCita(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroCita += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)
    return secuencias[0].autonumeroCita
}

function getValorSecuenciaHistorial(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroHistorial += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)
    return secuencias[0].autonumeroHistorial
}

function getValorSecuenciaFactura(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroFactura += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)
    return secuencias[0].autonumeroFactura
}

function getValorSecuenciaUsuario(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroUsuario += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)
    return secuencias[0].autonumeroUsuario
}

function getValorSecuenciaMensaje(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroMensaje += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)
    return secuencias[0].autonumeroMensaje
}

function getValorSecuenciaPaciente(){
    secuencias = getJSONDeLocalStore(nombreLocalStore)
    if (secuencias.length == 0) {
        secuencia = new Secuencia
        secuencias.push(secuencia)

    }
    secuencias[0].autonumeroPaciente += 1

    setJSONDeLocalStore(nombreLocalStore, secuencias)
    return secuencias[0].autonumeroPaciente
}