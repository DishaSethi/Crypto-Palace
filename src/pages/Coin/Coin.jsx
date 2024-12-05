import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';

const Coin = () => {

const {coinId}=useParams();
const [coinData,setCoindata]=useState();
const {currency}=useContext(CoinContext);

const fetchCoinData=async()=>{

  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-18iSy9kSxpte6fzEtBstWk4w'}
  };
  
  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then(res => res.json())
    .then(res => setCoindata(res))
    .catch(err => console.error(err));

}

useEffect(()=>{
fetchCoinData();
},[currency])


if(coinData){
  return (
    <div>
      <h2 className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        </h2>
    </div>
  );
}else{
  return (
    <div className='spinner'> 
    <div className="spin"></div>

    </div>
     
  );
}

}

export default Coin;
