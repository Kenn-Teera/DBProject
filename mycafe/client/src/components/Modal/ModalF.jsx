import React from 'react'
import './Modal.scss'
import Counter from '../Counter/Counter'

const ModalF = (props) => {
  const { food, onbnClick } = props;
  return (
    <div className='Modal'>
      <div className='Modal-bg'>
        <div className='nav'>
          <span>Name ( 12 bath )</span>
          <button className='button-ni' onClick={onbnClick}>X</button>
        </div>
        <div className='Modal-content Modal-img-bg'>
          <img className='image'src={food.imgURL} alt="" />
        </div>
          <div className='text-bg'>
            <h4>test</h4>
          </div>
          <div className='moveCount'>
          <Counter/>
          <div className="confirm-button">
          <button className="button-ni2" >Confirm</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ModalF