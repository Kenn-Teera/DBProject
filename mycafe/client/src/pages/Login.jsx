import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../img/Logo_cut.png"
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({

    Cus_email:"",
    Cus_pw:"",
  })
  const [err,setError]=useState(null)

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)


  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
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
            <input required type='email' placeholder='Email'name = "Cus_gmail" onChange={handleChange}/>
            <input required type='password' placeholder='Password'name = "Cus_pw" onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>Don't you have an account?<Link to ="/Register">Register</Link></span>
        </form>
     </div>
  )
}

export default Login