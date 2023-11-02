import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import { CoinList } from './config/api';


const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");  
   

  //  moved from cointable 
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null)

  const [alert , setAlert] = useState({
    open: flase,
    message: " ",
    type: "success",
  })

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));


    setCoins(data);
    setLoading(false);
  };


  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <CryptoContext.Provider value={{ currency, symbol, setCurrency, coins, loading, fetchCoins,alert,setAlert }}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoProvider;

export const CryptoState = () => {
  return useContext(CryptoContext);
};
