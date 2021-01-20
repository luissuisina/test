let verSaludo = document.querySelector('h1');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let saludo = ` <small>hola, buenas noches</small>`
let inicio = 'Texto de inicio'

const Saludar = () => {
    verSaludo.innerHTML = saludo;
}
const Inicio = () => {
    verSaludo.textContent = inicio
}
btn2.onclick = () => {
    Saludar()
    btn1.className = 'show'
    btn2.className = 'esconder'
}
btn1.onclick = () => {
    Inicio();
    btn2.className = 'show'
   btn2.className = 'esconder'
}
btn1.onclick = () => {
    Inicio();
    btn2.className = 'show'
    btn1.className = 'esconder'
}