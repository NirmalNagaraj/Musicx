import React from "react";
import InputAdornments from "./components/password";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import Buttons from "./components/button";
import { Link } from "react-router-dom";



export default function Login(){
    return(
        <div>
            <div className="title"><h1 className="musicx" style={{color:"White"}}>Musicx</h1></div>
        
        <div className="full">    
                    <h2 style={{color:'White',textAlign:'center',paddingTop:"20px"}}>Login</h2>
        <div className="login" >   
            <div className="login--content">
                <div className="login--background">
                    <div className="login--username">
                    <TextField sx={{ m: 1, width: '25ch' }}
                        label="Username"
                        id="standard-size-normal"
                        
                        variant="standard"
                        />
                    </div> 
                  
                        <InputAdornments/>
                    <br></br>
                    <div className="login--button">
                    <Link to="/search" >
                    <Button variant="contained" endIcon={<LoginTwoToneIcon/>} size='small'>
                            Login
                        </Button>   
                        </Link>
                        <br></br><br></br>
                        <h6>New to Musicx? <a href="#">SignUp</a></h6>
                        
                    </div>
                        <h6>---OR---</h6>
                    <div className="butto">
                        <Buttons/>
                    </div>  
                 </div>
            </div>   
            </div>
            
        </div>
        
        </div>

        

        
    )
}