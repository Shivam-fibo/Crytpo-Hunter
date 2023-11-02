import React from 'react'
import { useState } from 'react'
import { Box, Button, TextField } from '@material-ui/core';
const Signup = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handlSubmit = ()=>{
        
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
