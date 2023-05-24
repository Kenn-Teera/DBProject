import React from 'react'
import './Baskett.scss'
import test from "../img/Drink/Coff/Cappuccino_.png"
import Counter from "../components/Counter/Counter"

function Basket() {

  return (
    <div className='bodyy'>
        <div className='Cart-Container'>
        <div className='Headerr'>
            <h3 className='Heading'>Shopping Cart</h3>
            <h5 className='Action'>Remove all</h5>
        </div>
            <div className='Cart-Items'>
                <div className='box'>
                    <img src={test}/>
                </div>
                <div class='about'>
                    <h1 className='title'>Test</h1>
                </div>
                <div className='counter'></div>
                <div className='prices'></div>
                <Counter/>
                <div class='prices'>
                <div class='amount'>Bath</div>
                <div class='remove'><u>Remove</u></div>
            </div>
            </div>
            <div className="confirm-button">
          <button className="button-ni2">Confirm</button>
          </div>
        </div>
    </div>
  );
};

export default Basket