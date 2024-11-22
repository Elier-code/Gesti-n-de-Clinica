const abrirModal = document.getElementById('abrirModal')
const cerrarModal = document.getElementById("cerrarModal")
const modal = document.getElementById("modal")


abrirModal.addEventListener('click', () => {
    modal.style.display = 'flex'
    
})
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none'
})
window.addEventListener('click', (event) =>{
    if(event.target == modal){
        modal.style.display = "none"
    }
})