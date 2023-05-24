import React from 'react';

const Dessert = ( props ) => {
  const { Dess, onDessClick } = props;
  return (
    <div className='item'>
      <img src ={Dess.imgURL} onClick={() => {onDessClick(Dess)}} alt=""/>
      <p>{Dess.title}</p>
    </div>
  );
};

export default Dessert;