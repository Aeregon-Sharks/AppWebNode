import express from "express"

const HomeRouter = express.Router()

//localhost:3000/home

HomeRouter.get("/", (req, res) => {
    res.send("Home")
})

HomeRouter.get("/login", (req, res) => {
    res.send("Logeanding")
})

export default HomeRouter;