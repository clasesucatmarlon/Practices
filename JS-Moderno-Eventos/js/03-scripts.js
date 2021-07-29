// Eventos con el teclado
// =================================

const busqueda = document.querySelector('.busqueda');


busqueda.addEventListener('keydown', () => {
    console.log('ESTAS escribiendo.....')
})

busqueda.addEventListener('input', (e) => {
    console.log(e.target.value)
})