import React from 'react';

const IceCream = ( props ) => {
  const { ice , onIceClick } = props;
  return (
    <div className='item'>
      <img src ={ice.imgURL} onClick={() => {onIceClick(ice)}} alt=""/>
      <p>{ice.title}</p>
    </div>
  );
};

export default IceCream;