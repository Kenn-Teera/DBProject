import React,{useState} from 'react'
import Rectangle from '../components/Rectangle'
//import Modal from '../components/Modal/Modal'
import Logo from "../img/Logo_cut.png"
import well from "../img/Welcome3.png"
//Drink
import Capu from '../img/Drink/Coff/Cappuccino_.png'
import Dalg from '../img/Drink/Coff/dalgona coffee.png'
import Earl from '../img/Drink/Tea/Earl Grey Tea(1).png'
import Jasm from '../img/Drink/Tea/Jasmine Tea.png'
//Food
import Khaw from '../img/Appetizer/ข้าวโพดทอดนมสด 1.png'
import Corn from '../img/Appetizer/คอร์นดอกชีส 1.png'
import Nugg from '../img/Appetizer/นัตเก็ต.png'
import Pork from '../img/Appetizer/ขนมปังหน้าหมู 1.png'
//ICE CREAM
import Choc from '../img/Icecream/Chocolate.png'
import Cocr from '../img/Icecream/Cookies _ Cream.png'
import Matc from '../img/Icecream/Matcha.png'
import Straw from '../img/Icecream/Strawberry_.png'
//Dessace
import Cake from '../img/Cake/Cake_.png'
import Candy from '../img/Cake/candy.png'
import Cook from '../img/Cake/Cookie_.png'
import Cup from '../img/Cake/Cupcake_.png'

const Home = () => {
  const [isEnlarged, setIsEnlarged] = useState(false)
  const [showItemLoader, setShowItemLoader] = useState(false);
  const [showFoodLoader, setShowFoodLoader] = useState(false);
  const [showIceCreamLoader, setShowIceCreamLoader] = useState(false);
  const [showDessertLoader, setShowDessertLoader] = useState(false);
  
  const handleClick = () => {
    setShowItemLoader(prevState => !prevState);
  };  
  const toggle = () => {
    setIsEnlarged(!isEnlarged);
  };
  const handleFoodClick = () => {
    setShowFoodLoader(prevState => !prevState);
  };
  const handleIceCreamClick = () => {
    setShowIceCreamLoader(prevState => !prevState);
  };
  const handleDessertClick = () => {
    setShowDessertLoader(prevState => !prevState);
  };

  return (
    <div className='home'>
       <img src= {Logo} alt="" />
       <img src= {well} alt="" />
      <div className="text-container" onClick={toggle}>
      <span className="ab">AB</span>
      <span className={`letter ${isEnlarged ? 'enlarged' : ''}`}>
        {isEnlarged ? <span className="circle">Hello, we are My Cafe, we are a cafe that will fill you with happiness. You can choose drinks or food as you wish. We will make you feel relaxed like in a real cafe.</span> : 'O'}
      </span>
      <span className="ut">UT</span>
    </div>
    <div>
    </div>
    <div className='center'>
      <p onClick={handleClick}>DRINK</p>
      {showItemLoader && (
        <div className="itemloader">
          <Rectangle title="Cappuccino" imgURL={Capu}/>
          <Rectangle title="Dalgona" imgURL={Dalg}/>
          <Rectangle title="Earl Grey" imgURL={Earl}/>
          <Rectangle title="Jasmine Tea" imgURL={Jasm}/>
        </div>
      )}
      <p onClick={handleFoodClick}>FOOD</p>
      {showFoodLoader && (
        <div className="itemloader">
          <Rectangle title="Khawpodthod" imgURL={Khaw}/>
          <Rectangle title="Corn dog" imgURL={Corn}/>
          <Rectangle title="Nugget" imgURL={Nugg}/>
          <Rectangle title="Bread Pord" imgURL={Pork}/>
        </div>
      )}
      <p onClick={handleIceCreamClick}>ICE CREAM</p>
      {showIceCreamLoader && (
        <div className="itemloader">
          <Rectangle title="Chocolate" imgURL={Choc}/>
          <Rectangle title="Chocolate Chip" imgURL={Cocr}/>
          <Rectangle title="Matcha" imgURL={Matc}/>
          <Rectangle title="Strawberry" imgURL={Straw}/>
        </div>
      )}
      <p onClick={handleDessertClick}>DESSERT</p>
      {showDessertLoader && (
        <div className="itemloader">
          <Rectangle title="Cake" imgURL={Cake}/>
          <Rectangle title="Candy" imgURL={Candy}/>
          <Rectangle title="Cookie" imgURL={Cook}/>
          <Rectangle title="Cup Cake" imgURL={Cup}/>
        </div>
      )}
      </div>
      </div>   
  )
}
export default Home