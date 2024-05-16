/* también se debe de llamar la funcion del segundo parametro en la primera funcion , al igual que se debe de llamar como un settimeout  */
function uno (dos) {
    console.log("uno")
   setTimeout(dos , 2000)
}

function dos () {
    console.log("dos")
   
}
/* la arrow funcion se pone primero y la segunda funcion en parentesis después de la primera  */
setTimeout(() =>uno (dos), 5000)


/* esta es una function anonima, se crea con una variable y se pone sin nombre  */
const nombre = function (){
    console.log("nombre")

}

nombre()

/* 
esta es una arrow function estás se ocupan como funcion anonima para poner a una funcion como consecuente de una funcion que es parametro de una setTimeout */
const persona = () => console.log("Emmanuel")

persona()

