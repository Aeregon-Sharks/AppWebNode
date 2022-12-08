import express from "express";
// Se definen constantes para express y para el puerto que utlizaremos
const app = express();
const port = 3000;
// Funcion callback para que cuando el servidor empiece a escuchar nos avise
//function callback(){
//    console.log("Server On");
//}
// Ya no necesitamos la funcion callback ya que usamos una flecha para hacer una funcion rapidamente que no reside en el codigo // ( //parameters ) => { //code }
function suma(a, b, callback){
    callback(a, b);
    return a + b;
}

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

app.get("/home/suma", (req, res) => {
    res.send("sumanding")
    console.log(suma(30, 20, (a, b)=>{
        console.log("Sumanding",a,"+",b,"...");
    }));
} )