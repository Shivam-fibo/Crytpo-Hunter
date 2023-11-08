import React from 'react'
import { useState } from 'react'
import { Box, Button, TextField } from '@material-ui/core';
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

import { CryptoState } from '../../CryptoContext';
const Signup = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { setAlert} = CryptoState()
    const handlSubmit =  async()=>{
        if(password !== confirmPassword)
        {
          setAlert({
            open: true,
            message: 'Password do not match',
            type: 'error'
          })
          return;
        }
        try {
          const result = await  createUserWithEmailAndPassword(
              auth,
              email,
              password
          );
          setAlert({
            open: true,
            message: `Sign Up Succesful. Welcome ${result.user.email}`,
            type: 'success'

          })
          handleClose();
        } catch (error) {
          setAlert({
            open: true,
            message: error.message,
            type: 'error'
          })
          return;
        }
    }
  return (
    <Box p={3} style = {{display :"flex",flexDirection: "column", gap : "20px"}}>
     <TextField variant='outlined' label = "Enter your email" type="email" value={email} fullWidth onChange ={(e)=>setEmail(e.target.value)}/>

<TextField variant='outlined' label = "Enter your password" type="password" value={password} fullWidth onChange ={(e)=>setPassword(e.target.value)}/>

     <TextField variant='outlined' label = "Enter password to confirm " type="password" value={confirmPassword} fullWidth onChange ={(e)=>setConfirmPassword(e.target.value)}/>

        <Button  variant='contained' size = "large" style={{backgroundColor: "#EEBC1d"}} onClick = {handlSubmit}>
            Sign Up 
        </Button>
        

    </Box>
  )
}

export default Signup
