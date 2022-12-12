import express from "express";

const UserRouter = express.Router()

//localhost:3000/user

const usuario = {
    name:  "Juan",
    email: "jc12345back@gmail.com",
    age:    25,
    grades: [ 3.3, 3.3, 3.5, 4.5, 5 ],
    pet: {
        name: "pirulo",
        type: "cat",
        age:   2
    }
}
//BORRAMOS USER DE LA URL YA QUE ESTE APARTADO YA ENTIENDE QUE ESTAMOS EN /USER. TAMBIEN REEMPLAZAMOS APP POR ROUTER
// Ahora creemos un get que me regrese un JSON. con el metodo .json en el objeto res.
UserRouter.get("/",(req, res) => {
    res.json(usuario)
})
// Si quiero ver solo un atributo puedo referenciarlo con un punto.
UserRouter.get("/grades",(req, res) => {
    res.json(usuario.grades)
})
// Si el objeto que devolvemos es tambien un JSON podemos tambien ver unicamente algun atributo de dicho JSON con puntos adicionales.
UserRouter.get("/pet/name",(req, res) => {
    res.json(usuario.pet.name)
})
// o el objeto JSON completo.
UserRouter.get("/pet",(req, res) => {
    res.json(usuario.pet)
})

// Podemos tambien recibir multiples grupos de datos separandolos con un metodo split. en la url podemos leer multiples nombres separandolos con un caracter. por lo general se usa ;
UserRouter.get("/agrupar", (req, res) => {
    res.send("Apartado de agrupar")
    })
UserRouter.get("/agrupar/:args", (req, res) => {
    let names = req.params.args
    names = names.split(";")
    //for (let i = 0 ; i < names.length; i++){
    //    console.log(names[i])
    //}
    res.json(names)
    })
    


// Tambien podemos extraer informacion de el HTTP con :, lo cual nos trae lo que haya en esa posicion de el / como una variable. Para esto usamos un metodo de REQ.
// Es necesario poner estos despues de todos los requerimientos, para que no trate a alguno de ellos como la variable que queremos sacar.
UserRouter.get("/:name", (req, res) => {
    let name = req.params.name
    res.send("ingreso "+name)
})
// Se pueden extraer multiples datos en variables y retornarlas en JSON con asignacion.
UserRouter.get("/:name/:id", (req, res) => {
    let name = req.params.name
    let id =  parseInt(req.params.id)

    res.json({
        id:     id,
        name:   name
    })
})




export default UserRouter