import React, { useContext } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { Link } from 'react-router-dom';

import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {
const {setCurrency}=useContext(CoinContext);


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
      <Link to={'/'}>
        <img src={logo} alt="" className='logo'  />
      </Link>
      <ul>
        <Link to={'/'}>
         <li>Home</li>
        </Link>
       
       <Link to={'/features'}>
        <li>Features</li>
       </Link>
       <Link to={'/pricing'}>
       <li>Pricing</li>
       </Link> 
      <Link to={'/blog'}>
       <li>Blog</li>
      </Link> 
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler} >
        <option value="usd">USD </option>
        <option value="inr">INR </option>
        <option value="eur">EUR </option>
         

        </select>
        <button>Sign Up <img src={arrow_icon} alt="" /></button>
      </div>
    </div>
  );
}

export default Navbar;
