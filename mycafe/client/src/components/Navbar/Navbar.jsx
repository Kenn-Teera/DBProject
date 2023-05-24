import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../img/Logo_cut.png"
import Cart from "../../img/pngtree-shopping-cart-convenient-icon-image_1287807-removebg-preview.png"
import './Navbar.scss'
import { AuthContext } from '../../context/authContext'

const Navbar = () => {
const {currentUser,logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='containers'>
        <div className='logo'>
          <Link to ="/">
          <img src= {Logo} alt="" />
          </Link>
        </div>
        <div className='links'>
          <Link to ="Basket">
          <img src={Cart}></img>
          </Link>
          <span><Link className='link regis' to ="register">Register</Link></span>
          <span>{currentUser?.Cus_name}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to ="login">Login</Link>}
        </div>
      </div>
    </div>
  )
}

export default Navbar