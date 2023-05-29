import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req,res) =>{

    //CHECK EXISTING USER
    const q = "SELECT * FROM Customer WHERE Cus_email = ? OR Cus_name = ?";
    db.query(q,[req.body.Cus_email, req.body.Cus_name], (err,data)=>{
        if(err) return res.json(err) ;
        if(data.length) return res.status(409).json("User already exists!");
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.Cus_pw,salt);
    
        const q = "INSERT INTO Customer(`Cus_name`,`Cus_email`,`Cus_pw`) VALUES (?)";
        const values = [
            req.body.Cus_name,
            req.body.Cus_email,
            hash,
        ]
        db.query(q,[values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created");
        })
    })
    //Hash the password and create a user
}

export const login = (req,res) =>{
    //Check user
    const q = "SELECT * FROM Customer WHERE Cus_email = ?"
    db.query(q, [req.body.Cus_gmail], (err,data)=>{
        if(err) return res.json(err);
   if(data.length === 0) return res.status(404).json("User not found!!");

   //Chack password
   const isPasswordCorrect = bcrypt.compareSync(req.body.Cus_pw, data[0].Cus_pw);

   if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

const token = jwt.sign({id:data[0].Cus_id}, "jwtkey");
const {Cus_pw, ...other} = data[0]

res.cookie("access_token",token , {
    httpOnly:true,
}).status(200).json(other)
})
}

export const logout = (req,res) =>{
res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
}).status(200).json("User has been logged out")
}