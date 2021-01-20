let myButton= document.querySelector('button')
let myTitle=document.querySelector('h1')
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    myTitle.textContent = 'Mozilla es genial,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    myTitle.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}
myButton.onclick = function() {
    estableceNombreUsuario();
}
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    myTitle.innerHTML = 'Mozilla is genial, ' + miNombre;
  }
}