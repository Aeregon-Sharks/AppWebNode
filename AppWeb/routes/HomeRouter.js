import express from "express"

const HomeRouter = express.Router()

//localhost:3000/home

HomeRouter.get("/", (req, res) => {
    res.send("Home")
})

HomeRouter.get("/login", (req, res) => {
    res.send("Logeanding")
})

// Array para guardar publicaciones.
let publicaciones = []

// Creamos el metodo POST que adicionalmente guarda el objeto JS que ingresó mediante el cuerpo de la peticion.
HomeRouter.post("/", (req, res) => {
    
    let id = Math.random().toString(36).slice(2)
    
    let publicacion = {
        "publicacion": req.body.publicacion,
        "id": id
    }
    publicaciones.push(publicacion)
    res.json(publicacion)
})

// Mostramos todas las publicaciones que guardamos mediante el POST.
HomeRouter.get("/lista", (req, res) => {
    res.json(publicaciones)
})

export default HomeRouter;