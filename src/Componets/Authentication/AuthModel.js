import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Button, Tabs, Tab} from '@material-ui/core';
import Login from './Login'
import Signup from './Signup';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
  width: 400,
  backgroundColor: theme.palette.background.paper,
  color: "White",
  borderRadius: 10

  },
}));

 export default function AuthModel() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const handleChange = (event, newValue) =>{
      setValue(newValue)
    }
      console.log(value);
    

  return (
    <div>
     <Button
     variant='contained'
     style={{
        width: 85,
        height: 40,
        marginLeft: 15,
        backgroundColor: "#EEBC1D"
     }}
     
     >
    Login
     </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,

        }}
      
      >
        <Fade in={open}>
          <div className={classes.paper}>
                <AppBar
                position='static'
                style={{
                    background : "transparent",
                    color: "white"
                }}
                >
                  <Tabs
                   value = {value}
                   onChange = {handleChange}
                   variant = "fullWidth"
                   style={{
                    borderRadius : 10
                   }}
                  
                  >
                      <Tab label = "Login"/>
                      <Tab  label = "Sign Up"/>
                  </Tabs>
                    
                </AppBar>
                {value === 0 && <Login handleClose = {handleClose}/>}
                {value=== 1 && <Signup handleClose = {handleClose}/>}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
