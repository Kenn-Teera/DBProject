import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../img/Logo_cut.png"
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({

    Cus_name:"",
    Cus_email:"",
    Cus_pw:"",
  })
  const [err,setError]=useState(null)

  const navigate = useNavigate()
  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("/auth/register", inputs)
      navigate("/login")

    }catch(err){
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
        <form>
            <div className='Logo'>
              <img src={Logo} alt="" />
            </div>
            <input required type='name' placeholder='Name (Ex. Kenn, Dog, Cat)' name = 'Cus_name' onChange={handleChange}/>
            <input required type='email' placeholder='Email' name = 'Cus_email' onChange={handleChange}/>
            <input required type='password' placeholder='Password' name = 'Cus_pw' onChange={handleChange}/>
            <button onClick={handleSubmit}>Register</button>
            {err &&<p>{err}</p>}
            <span>Do you have an account?<Link to ="/Login">Login</Link></span>
        </form>
     </div>
  )
}

export default Register