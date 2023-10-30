import { LinearProgress, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api'
import { CryptoState } from '../CryptoContext'
import CoinInfo from './CoinInfo'
import ReactHtmlParser from 'react-html-parser'
import { numberWithCommas } from './Carousel'

const CoinPage = () => {
 const {id} = useParams()
 const [coin, setCoin] = useState()
 const {currency, symbol} = CryptoState();

 const fetchCoin = async()=>{
    const {data} = await axios.get(SingleCoin)
    setCoin(data);
 }
    console.log(coin)

    useEffect(()=>{
        fetchCoin();
    }, [])
  const useStyles = makeStyles((theme)=>({
    container:{
        display:"flex",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems: "center",
        },

        sidebar:{
            width:"30%",
            [theme.breakpoints.down("md")]:{
                width: "100%"
            },
            display: "flex",
            flexDirection: "colum",
            alignItems: "center",
            marginTop: 25,
            borderRight: "2px solid grey"
        },
        heading: {
          fontWeight: "bold",
          marginBottom: 20,
          fontFamily: "Montserrat",
        },
        description:{
          widht: "100%",
          fontFamily: "Montserrrat",
          padding: 25,
          paddingBottom: 15,
          paddingTop:0,
          textAlign: "justify "
        },
        marketData:{
          alignSelf: "start",
          padding: 25,
          paddingTop: 10,
          width: "100%",
          //  for responsive
          [theme.breakpoints.down("md")]:{
            display: "flex",
            justifyContent: "space-around"
          },
          [theme.breakpoints.down("sm")]:{
            flexDirection: "column",
            alignItems: "center"
          },
          [theme.breakpoints.down("xs")]:{
            alignItems: "start"
          }

        }

    }
  }))

  const classes = useStyles();
  if (!coin) return <LinearProgress style={{backgroundColor: "gold"}}/>

  return (
//     the section is divided into two part
      <div className={classes.container}>
    {/* sidebar section which descibe info about coins */}
        <div className={classes.sidebar}>
          <img src={coin?.img.large} alt={coin?.name}  height = "200" style={{
            marginBottom: 20
          }}/>
          <Typography variant='h3' className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant='subtitle1' className={classes.description}>
            {ReactHtmlParser(coin?.description.en.split(".")[0]) }

          </Typography>
             
        </div>
        // market data discription
        <div className={classes.marketData}>

          // rank of coin
          <span style={{display: "flex"}}>
            <Typography variant = "h5" className={classes.heading}>
              Rank:
            </Typography>
              &nbsp; &nbsp;
              <Typography 
              variant='h5'
              style={{
                fontFamily: "Montserrat",
              }}
              >
                {coin?.market_cap_rank }
                 
              </Typography>
          </span>
          {/* current price */}
          <span>
          <Typography variant = "h5" className={classes.heading}>
              Current Price: 
            </Typography>
              &nbsp; &nbsp;
              <Typography 
              variant='h5'
              style={{
                fontFamily: "Montserrat",
              }}
              >
              {symbol} {" "}
              {numberWithCommas(
                 coin?.market_data.current_price[currency.toLowerCase()]
              )}
                 
              </Typography>
          </span>
          // market cap info
          <span> 
          <Typography variant = "h5" className={classes.heading}>
              Market Cap : { " "}
            </Typography>
              &nbsp; &nbsp;
              <Typography 
              variant='h5'
              style={{
                fontFamily: "Montserrat",
              }}
              >
                {symbol} { " "}
                {
                  numberWithCommas(
                     coin?.market_data.market_cap[currency.toLowerCase()]
                      .toString()
                      .slice(0, -6)
                  )
                }
                 M
              </Typography>
          </span>
        </div>
       {/* chart section  */}
       <CoinInfo coin = {coin}/>

      </div>
  )
}

export default CoinPage
