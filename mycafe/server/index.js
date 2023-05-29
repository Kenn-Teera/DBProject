import express from "express"
import homeRoutes from "./routes/home.js"
import authRoutes from "./routes/auths.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/home",homeRoutes)
app.use("/api/auth",authRoutes)

app.listen(8800, () => {
    console.log("Connected!")
})
