import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../img/Logo_cut.png"
import './Navbar.scss'
import { AuthContext } from '../../context/authContext'

const Navbar = () => {
const {currentUser,logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to ="/">
          <img src= {Logo} alt="" />
          </Link>
        </div>
        <div className='links'>
          <span>{currentUser?.Cus_name}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to ="login">Login</Link>}
        </div>
      </div>
    </div>
  )
}

export default Navbar