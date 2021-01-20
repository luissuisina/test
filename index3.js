//console.log(document)
/* function Saludar(){
    let saludo= 'hola, buenas noches'
    verSaludo.textContent= saludo
}
btn.onclick = function(){
    Saludar();
} */
let verSaludo = document.querySelector('h1');
let btn = document.querySelector('button');
const Saludar = () => {
    let saludo = 'hola, buenas noches';
    verSaludo.textContent = saludo;
    console.log('1', verSaludo)
    if (verSaludo) {
        const Inicio = () => {
            let inicio = 'Texto de inicio'
            verSaludo.textContent = inicio
        }
        btn.onclick = function () {
            Inicio(); 
        }
    } 
}
btn.onclick = function () {
    Saludar();
}
console.log('2', verSaludo)
if (verSaludo === 'Texto de inicio') {
    console.log('igual a Texto de inicio')
}
btn.onclick = function () {
    console.log('click')
 }
    
    