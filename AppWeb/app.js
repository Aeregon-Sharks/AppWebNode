import express from "express";
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
