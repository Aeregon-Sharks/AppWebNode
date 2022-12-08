import express from "express";
import UserRouter from "./routes/UserRouter.js";
// Se definen constantes para express y para el puerto que utlizaremos
const app = express();
const port = 3000;
// Funcion callback para que cuando el servidor empiece a escuchar nos avise
//function callback(){
//    console.log("Server On");
//}
// Ejemplo de uso de el callback con la funcion suma()=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>==>=>=>=>=>=>=>=>=>=>=>=>=>1
function suma(a, b, callback){
    callback(a, b);
    return a + b;
}
// Ya no necesitamos la funcion callback ya que usamos una flecha para hacer una funcion rapidamente que no reside en el codigo // ( //parameters ) => { //code }
app.listen(port, () => {
    console.log("Server On");
} )

app.get("/", (req, res) => {
    res.send("Hola");
} )

app.get("/home", (req, res) => {
    res.send("Menu Home");
} )

app.get("/home/login", (req, res) => {
    res.send("Menu Login");
} )
//   Ejemplo de uso de el callback con la funcion suma()=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>==>=>=>=>=>=>=>=>=>=>=>=>=>2
//   El callback puede usar de parametros los mismos parametros que recibio la funcion original, pero debemos especificarlos de todas formas dentro de la funcion flecha
///  mas no ingresarlos. Tambien podriamos haber implementado el resultado en la funcion suma como una variable y luego agregarsela al callback para que la mostrara, o sumara.
//// en general el call back puede usar cualquier variable o parametro de su funcion original siempre y cuando lo especifiquemos tambien en la funcion flecha.
app.get("/home/suma", (req, res) => {
    res.send("sumanding")
    console.log(suma(30, 20, (a, b)=>{
        console.log("Sumanding",a,"+",b,"...");
    }));
} )
// El metodo redirect de el objeto res nos redirecciona a la direccion que pongamos en los parentesis, en este caso, a el menu home, cuando accedemos a la URL que especificamos.
app.get("/redirect", (req, res) => {
    res.redirect("/home")
})
///////////// Por buenas practicas es recomendable mover a nuestra carpeta ruta nuestras rutas de cada cosa que queramos manejar, en este caso, usuarios. /////////////////////////

//// Los objetos y las clases no son lo mismo en javascript, un objeto en javascript es un objeto JSON. Creemos un objeto JSON.
//// La principal diferencia es que los objetos JSON no pueden implementar funcionalidades, solo son informacion con propiedades.
//const usuario = {
//    name:  "Juan",
//    email: "jc12345back@gmail.com",
//    age:    25,
//    grades: [ 3.3, 3.3, 3.5, 4.5, 5 ],
//    pet: {
//        name: "pirulo",
//        type: "cat",
//        age:   2
//    }
//}

//// Ahora creemos un get que me regrese un JSON. con el metodo .json en el objeto res.
//app.get("/User",(req, res) => {
//    res.json(usuario)
//})
//// Si quiero ver solo un atributo puedo referenciarlo con un punto.
//app.get("/User/grades",(req, res) => {//
//    res.json(usuario.grades)
//})
//// Si el objeto que devolvemos es tambien un JSON podemos tambien ver unicamente algun atributo de dicho JSON con puntos adicionales.
//app.get("/User/petname",(req, res) => {
//    res.json(usuario.pet.name)
//})

// AHORA en lugar de usar estas direcciones usamos .use en nuestro app
app.use("/user", UserRouter)