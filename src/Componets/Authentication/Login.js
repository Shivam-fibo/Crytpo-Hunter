import React, {useState } from 'react'
import { Box, TextField, Button } from '@material-ui/core';
import { CryptoState } from '../../CryptoContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase'
const Login = ({handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAlert} = CryptoState()


    const handlSubmit = async()=>{
          if(!email || !password){
            setAlert({
              open: true,
              message: "Please fill all the Fields",
              type: 'error'
            });
            return
          }
          try {
            
            const result = await signInWithEmailAndPassword(auth, email , password)
            setAlert({
              open: true,
              message: `Login Succesful. Welcome ${result.user.email}`,
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
    <div>
       <Box p={3} style = {{display :"flex",flexDirection: "column", gap : "20px"}}>
     <TextField variant='outlined' label = "Enter your email" type="email" value={email} fullWidth onChange ={(e)=>setEmail(e.target.value)}/>
    
     <TextField variant='outlined' label = "Enter your password" type="password" value={password} fullWidth onChange ={(e)=>setPassword(e.target.value)}/>

        <Button  variant='contained' size = "large" style={{backgroundColor: "#EEBC1d"}} onClick = {handlSubmit}>
            Log In  
        </Button>

  </Box>
    </div>
  )
}

export default Login
