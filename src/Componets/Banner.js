import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'
const useStyes= makeStyles((theme)=>({
    banner:{
        backgroundImage : "url(./banner2.jpg)"
    },
    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection: "coulmn",
        paddingTop: 25,
        justifyContent : "space-around"
    },
    tagline:{
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
}))


const Banner = () => {
    const classes = useStyes();
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography 
                variant='h2'
                style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat"
                }}
                >
                    Crypto Hunter

                </Typography>
                <Typography
                
                style={{
                    color:"darkgray",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat"
                }}
                >
                    Get all the info regarding with your favorite Crypto Currency

                </Typography>
            </div>
          <Carousel />
        </Container>
      
    </div>
  )
}

export default Banner
