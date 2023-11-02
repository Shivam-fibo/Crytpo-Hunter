import React, {useState } from 'react'
import { Box, TextField, Button } from '@material-ui/core';
const Login = ({handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlSubmit = ()=>{
        
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
