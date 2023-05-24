import React from 'react';

const Drinks = ( props ) => {
  const { Coff , onDrinkClick } = props;
  return (
    <div className='item'>
      <img src ={Coff.imgURL} onClick={() => {onDrinkClick(Coff)}} alt=""/>
      <p>{Coff.title}</p>
    </div>
  );
};

export default Drinks;
