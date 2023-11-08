import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import { CoinList } from './config/api';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");  
   

  //  moved from cointable 
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null)

  const [alert , setAlert] = useState({
    open: false,
    message: " ",
    type: "success",
  })
  // for monitaring the state of authentication from firebase
  useEffect(()=>{
      onAuthStateChanged(auth, user => {
        if(user) setUser(user);
        else setUser(null)
      })
  }, [])

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
    <CryptoContext.Provider value={{ currency, symbol, setCurrency, coins, loading, fetchCoins,alert,setAlert, user }}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoProvider;

export const CryptoState = () => {
  return useContext(CryptoContext);
};
