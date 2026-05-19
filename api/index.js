import express from "express"
import { aiGenerate } from "./aiGenerate.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors(
    {
        orgin: "http://localhost:5173",
        credentials: true,
    }
))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/ai-generate", aiGenerate)

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})