function getJSONDeLocalStore(nombreLocalStore) {

    return JSON.parse(
        localStorage.getItem(nombreLocalStore) || "[]")
}

function setJSONDeLocalStore(nombreLocalStore, arrayJSON) {

    localStorage.setItem(nombreLocalStore,
        JSON.stringify(arrayJSON))
}

//Funciones para el manejo de la fecha
function obtenerFechaMas30Dias() {
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); // Reinicia la hora para evitar valores inesperados
    fechaActual.setDate(fechaActual.getDate() + 30); // Añade 30 días
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const fechaFinal = `${año}-${mes}-${dia}`
    console.log(fechaFinal)
    return fechaFinal
}
function obtenerFechaActual(){
    const fechaActual = new Date()
    fechaActual.setHours(0, 0, 0, 0)
    const formato = fechaActual.toLocaleDateString('es-ES')

    const [dia, mes, año] = formato.split('/') // Divide la cadena en partes
    const formatoISO = `${año}-${mes}-${dia}`
    return formatoISO
}