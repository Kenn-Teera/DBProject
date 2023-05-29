import {db} from "../db.js";

export const test = (req, res) => {

    const q = "SELECT * FROM mycafe.Product"
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}