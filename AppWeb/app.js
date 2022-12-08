import express from "express";
// Se definen constantes para express y para el puerto que utlizaremos
const app = express();
const port = 3000;
// Funcion callback para que cuando el servidor empiece a escuchar nos avise
function callback(){
    console.log("Server On");
}

app.listen(port, callback)

app.get("/", (req, res) => {
    res.send("Hola")
} )

app.get("/home", (req, res) => {
    res.send("Menu Home")
} )

app.get("/home/login", (req, res) => {
    res.send("Menu Login")
} )