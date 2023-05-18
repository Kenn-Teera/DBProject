import React from 'react'
import './Modal.scss'
import Capu from '../../img/Drink/Coff/Cappuccino_.png'

const Modal = (props) => {
  const {title,imgURL} = props;
  return (
    <div className='Modal'>
      <div className='Modal-bg'>
        <div className='nav'>
          <span>Name</span>
          <button>x</button>
        </div>
        <div className='Modal-content Modal-img-bg'>
          <img className='image'src={Capu} alt="" />
        </div>
          <div className='text-bg'>
            <h4>test</h4>
          </div>
      </div>
    </div>
  )
}

export default Modal