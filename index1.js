//tipos de datos
//tipo String="esto es un String"
//tipo Number=7
//tipo Boolean= true
//tipo Null= null
//tipo Undefined= undefined
/* tipo Objetos= {
    nombre:luis
} */
//tipo Array=["leche",false,8,null,undefined,true,[4,7,10],{edad:23,ciudad:"punta arenas"},"400"]


//una variable es el lugar donde puedo almacenar algun dato o informacion 
const PI=3.14;
let ciudad="Valencia";
ciudad= "ciudad bolivar"
let peliculas=["fragmentados","que paso ayer","jumanji"]
console.log("fragmentados","que paso ayer","jumanji")
console.log(peliculas)
console.log(peliculas[2])
console.log(peliculas[1])
let dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo","monday","tuesday","wednesday"]
//bucle for
/* for(let i=0;i<8;i++){
    console.log(i)
    console.log(dias[i]) 
}*/
//condicionales
let animales="perro"
/* if(animales ==="gato"){
    console.log("tienes un gato")
}
if(animales ==="perro"){
    console.log("tienes un perro")
} */


/* if(animales ==="gato"){
    console.log("tienes un gato")
}
else{
    console.log("tienes otro animal")
} */
/* animales="caballo"

 if(animales ==="gato"){
    console.log("tienes un gato")
}else if(animales === "tortuga"){
    console.log("tienes una tortuga")
}else if(animales ==="caballo"){
    console.log("tienes un caballo")
}else if(animales=== "jirafa"){
    console.log("tienes una jirafa")
}else{
    console.log("no tienes un animal que coincida con los que tenemos")
} */


let largoDias=dias.length
    console.log(largoDias)
//bucle for
for(let i=0;i<largoDias;i++){
    //console.log(dias[i])

    if(dias[i]=="miercoles"){
        console.log("hoy miercoles tienes una reunion en la empresa")

    }else if(dias[i]=="viernes"){
        console.log("hoy viernes tienes que ir al medico")

    }else if(dias[i]=="sabado"){
        console.log("hoy sabado debes hacer unas llamadas de negocio")

    }else if(dias[i]=="domingo"){
        console.log("hoy domingo es el cumpleaños de mamá")
    }


}
let name="luis daniel"
let lastname="ojeda suisiña"
let fullname="luis daniel ojeda suisiña"
    console.log(fullname,"fullname1")
fullname = name + " "+ lastname
    console.log(fullname,"fullname2")

//funciones
/* function PintarNombre(){
    
} */

function Saludar(){
    console.log("hola, buenos dias")
}
//llamando a la funcion
Saludar();
Saludar();
Saludar();
Saludar();
Saludar();
//funciones con parametros
function SaludarConNombre(name){
    console.log("hola, buenos dias "+ name)

}
SaludarConNombre();
SaludarConNombre("Luis daniel");
SaludarConNombre("ana guissel");
SaludarConNombre(fullname);

function Sumar(a,b){
    console.log(a+b)

}
//llamando a la funcion
Sumar(5,20)
const Restar=(a,b)=>{
    console.log(a-b)

}
//llamando a la funcion
Restar(5,2)

//alert("hola como estas?")

let ciudades="puerto ordaz " + " "+ "upata"
    console.log(ciudades)

let ciudad1="madrid"
let ciudad2="barcelona"
let sumaDeCiudades=ciudad1 + " " + ciudad2
    console.log(sumaDeCiudades)
let ciudadotra=`  las ciudades son: ${ciudad1} ${ciudad2}`
    console.log(ciudadotra)

    const personaje={
        nickname:"jose antonio",
        age:"36",
        single:true,
        favoriteGame:["uno","fortnite","ajedrez"],
        pets:true,
        adress:"punta arenas pje 3",
        mail:"joseanotniogmail.com"


    }
    //notacion de puntos
    console.log(personaje.mail)
    console.log(personaje)
    console.log(personaje.favoriteGame)
    console.log(personaje.favoriteGame[2])
   //notacion de corchete
    console.log(personaje["single"])

//desestructuracion
    const{pets,mail}=personaje
        console.log(pets)
    const{age,adress}=personaje
        console.log(age)
        console.log(adress)
        




