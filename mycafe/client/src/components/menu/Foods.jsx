import React from 'react';

const Foods = ( props ) => {
  const { food, onFoodClick } = props;
  return (
    <div className='item'>
      <img src ={food.imgURL} onClick={() => {onFoodClick(food)}} alt=""/>
      <p>{food.title}</p>
    </div>
  );
};

export default Foods;