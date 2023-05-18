import express from "express"
import customersRoutes from "./routes/customers.js"
import authRoutes from "./routes/auths.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/customers",customersRoutes)
app.use("/api/auth",authRoutes)

app.listen(8800, () => {
    console.log("Connected!")
})
