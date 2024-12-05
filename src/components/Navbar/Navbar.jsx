import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { Link } from 'react-router-dom';

import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {
const {setCurrency}=useContext(CoinContext);
const [isMenuOpen,setIsMenuOpen]=useState(false);
const [activeTab, setActiveTab]=useState('home');

const toggleMenu=()=>{
  setIsMenuOpen(!isMenuOpen);
};

const handleTabClick=(tab)=>{
  setActiveTab(tab);
}

const currencyHandler=(event)=>{
    switch(event.target.value){
        case "usd":{
            setCurrency({name:"usd",symbol:"$"});
            break;
        }
        case "eur":{
            setCurrency({name:"eur",symbol:"€"});
            break;
        }
        case "inr":{
            setCurrency({name:"inr",symbol:"₹"});
            break;
        }
        default:{
            setCurrency({name:"usd",symbol:"$"});
            break;
        }
    }

}
  return (
    <div className='navbar'>
  
      <Link to={'/'} onClick={() => handleTabClick('home')}>
        <img src={logo} alt="" className='logo'  />
      </Link>
   

   
      


      <ul >
        <Link to={'/'} onClick={() => handleTabClick('home')}>
         <li className={activeTab === 'home' ? 'active' : ''}>Home</li>
        </Link>
       
       
      <Link to={'/news'} onClick={() => handleTabClick('news')}>
       <li className={activeTab === 'news' ? 'active' : ''}>News</li>
      </Link> 
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler} >
        <option value="usd">USD </option>
        <option value="inr">INR </option>
        <option value="eur">EUR </option>
         

        </select>
        {/* <button>Sign Up <img src={arrow_icon} alt="" /></button> */}
      </div>

      <button className='hamburger' onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <div className={`nav-links ${isMenuOpen ?'open':''}`}>
      <Link to={'/'} onClick={() => handleTabClick('home')}>
      <li className={activeTab === 'home' ? 'active' : ''}>Home</li>
                </Link>
              
                <Link to={'/news'} onClick={() => handleTabClick('news')}>
                <li className={activeTab === 'news' ? 'active' : ''}>News</li>
                </Link>
      </div>
    </div>
  );
}

export default Navbar;
