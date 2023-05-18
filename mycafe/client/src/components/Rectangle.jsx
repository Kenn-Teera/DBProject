import React from 'react'

const Rectangle = (props) => {
    const {title,imgURL} = props;
  return (
    <div className='item'>
        <img src= {imgURL}/>
        <p>{title}</p>
    </div>
  )
}

export default Rectangle