import { AppBar, Container, createTheme, ThemeProvider, Toolbar, Typography} from '@material-ui/core'
import { Select, MenuItem } from "@material-ui/core";
import React from 'react'

import {makeStyles} from "@material-ui/core"
import { useNavigate } from 'react-router-dom';
import   {CryptoState}  from '../CryptoContext';



    const useStyles = makeStyles(()=>({
        title: {
            flex:1,
            color: "gold",
            fontFamily: "Montserrat",
            cursor: "pointer",

        }
    }));
    const darkTheme = createTheme({
        palette:{
            primary:{
                main: "#fff",
            },
            type: "dark"
        }
    });
 
    const Header = () => {
        const {currency, setCurrency} = CryptoState()
        console.log(currency);
        
        
        const classes = useStyles();
        const navigate = useNavigate()
    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography  onClick={()=> navigate("/")} className={classes.title}>    Crypto Hunter     </Typography>
                    <Select variant="outlined" style={{
                        width: 100,
                        height: 40,
                        marginLeft: 15
                    }}
                    value={currency}
                    onChange={(e)=>setCurrency(e.target.value)}
                    >
                        <MenuItem value={'USD'}> USD </MenuItem>
                        <MenuItem value={'INR'}> INR </MenuItem>

                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header
