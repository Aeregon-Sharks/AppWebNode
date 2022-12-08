import express from "express";

const UserRouter = express.Router()

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
UserRouter.get("/petname",(req, res) => {
    res.json(usuario.pet.name)
})

export default UserRouter