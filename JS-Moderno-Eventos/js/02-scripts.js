// Eventos con el mouse
// =================================

const nav = document.querySelector('.navegacion');

// evento click
nav.addEventListener('click', () => {
    console.log('CLICK en NAV');
})
// evento cuando se pasa el mouse por una zona
nav.addEventListener('mouseenter', () => {
    console.log('MOUSE sobre NAV');
    nav.style.backgroundColor = 'blue';
})
// evento cuando el mouse sale de una zona
nav.addEventListener('mouseout', () => {
    console.log('MOUSE aliendo de NAV');
    nav.style.backgroundColor = 'transparent';
})

// Otros

// mousedown: Similar al click
// dblclick: Double click
// mouseup:  Cuando se suelta la pulsación del mouse