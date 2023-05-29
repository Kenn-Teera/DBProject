import {db} from "../db.js";
import express from "express"

const router = express.Router()

router.get("/test", (req,res) =>{
    const q = "SELECT * FROM mycafe.Product"
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

router.get("/drink", (req,res) =>{
    const q = "SELECT * FROM mycafe.Product WHERE Prod_type IN ('Coffee','Tea')"
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})
router.get("/food", (req,res) =>{
    const q = "SELECT * FROM mycafe.Product WHERE Prod_type IN ('Appertizer')"
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

export default router