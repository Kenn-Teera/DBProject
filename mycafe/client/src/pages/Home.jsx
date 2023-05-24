import React,{useState} from 'react'
//menu
import Drinks from '../components/menu/Drinks'
import IceCream from '../components/menu/IceCream';
import Foods from '../components/menu/Foods';
import Dessert from '../components/menu/Dessert';

import Modal from '../components/Modal/Modal'
import ModalF from '../components/Modal/ModalF';
import Modalc from '../components/Modal/Modalc';
import ModalD from '../components/Modal/ModalD';
//images
import Logo from "../img/Logo_cut.png"
import well from "../img/Welcome3.png"

//data
import ice from '../Data/Ice';
import Coff from '../Data/Coff';
import Dess from '../Data/Dess';
import food from '../Data/food';


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
  //modal
  const [selectedDrink, setDrink] = useState(null);
  const [selectedFood, setFood] = useState(null);
  const [selectedIce, setIce] = useState(null);
  const [selectedDess, setDess] = useState(null);

  function onDrinkOpenClick(theDrink){
      setDrink(theDrink);
  }
  function onFoodOpenClick(theFood){
      setFood(theFood);
  }
  function onIceOpenClick(theIce){
      setIce(theIce);
  }
  function onDessOpenClick(theDess){
      setDess(theDess);
  }
  function CloseModal(){
    setDrink(null);
    setFood(null);
    setDess(null);
    setIce(null);
  }

  const DrinkElements = Coff.map((coff, index) => {
    return <Drinks key={index} Coff={coff} onDrinkClick = {onDrinkOpenClick} />;
  });
  const FoodElements = food.map((food, index) => {
    return <Foods key={index} food={food} onFoodClick = {onFoodOpenClick}/>;
  });
  const IceCreamElements = ice.map((ice, index) => {
    return <IceCream key={index} ice={ice} onIceClick = {onIceOpenClick}/>;
  });
  const DessertElements = Dess.map((Dess, index) => {
    return <Dessert key={index} Dess={Dess} onDessClick = {onDessOpenClick}/>;
  });


  let modal = null;
  if(!!selectedDrink){
    modal = <Modal Coff={selectedDrink} onbnClick={CloseModal}/>
  }
  else if(!!selectedFood){
    modal = <ModalF food={selectedFood} onbnClick={CloseModal}/>
  }
  else if(!!selectedIce){
    modal = <Modalc ice={selectedIce} onbnClick={CloseModal}/>
  }
  else if(!!selectedDess){
    modal = <ModalD Dess={selectedDess} onbnClick={CloseModal}/>
  }
  

  return (
    <div className='home'>
       <img className='img-logo' src= {Logo} alt="" />
       <img className='img-logo' src= {well} alt="" />
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
          {DrinkElements}
        </div>
      )}
      <p onClick={handleFoodClick}>FOOD</p>
      {showFoodLoader && (
        <div className="itemloader">
        {FoodElements}
        </div>
      )}
      <p onClick={handleIceCreamClick}>ICE CREAM</p>
      {showIceCreamLoader && (
        <div className="itemloader">
          {IceCreamElements}
        </div>
      )}
      <p onClick={handleDessertClick}>DESSERT</p>
      {showDessertLoader && (
        <div className="itemloader">
          {DessertElements}
        </div>
      )}
      </div>
      {modal}
      </div>   
  )
}
export default Home