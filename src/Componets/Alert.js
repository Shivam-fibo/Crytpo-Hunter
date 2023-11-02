import { Snackbar } from '@material-ui/core';
import React from 'react'
import { CryptoState } from '../CryptoContext'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = () => {

    const {alert, setAlert} = CryptoState();

    const handleClose = (even, reson) =>{
        if(reson=== "clickaway")
        {
            return;
        }
        setAlert({
            open : false
        })
    }
  return (
   <Snackbar open = {alert.open} autoHideDuration = {3000} onClose = {handleClose}>
    <MuiAlert onClose={handleClose}>

    </MuiAlert>

   </Snackbar>
  )
}

export default Alert
