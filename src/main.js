import React from 'react'
import Login from './login';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';


export default function Main(){
  return(
    <div className='main--full'>
      <div className="main">
       
          <Stack direction={'row'} >
            <div className='musicx--padding'><h1 className="main--title">Musicx</h1></div>
            <div className='main--but'>
              <Stack direction={'row'} spacing = {4} style={{paddingTop:"25px"}}>
                <Button href=''>What's New?</Button>
                <Button href=''>Pricing</Button>
              </Stack>
             </div>
          </Stack>


        <div className='main--bg'>
        <div className='woohoo'>
          <h1 style={{fontSize:"xxx-large",color:"white",paddingTop:"30px"}}>Woohoo!!!</h1>
        </div>
        <br></br>
        <div className='para'>
          <h3 style={{color:"aliceblue"}}><b>Do you want to listen to music?</b> You have arrived at the right destination.</h3>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
       </div>
      
      
        <div className='second--half'>
        <h1 style={{padding:"0px 20px", color:"aliceblue"}}>Let's Get started..</h1>
        <br></br><br></br><br></br>
   
         <Stack direction={"row"} spacing={8}>
           <div className='login--card1'>
              <Card sx={{ width: 475 ,backgroundColor:"#121212" , borderRadius:"15px"}}>
            <CardContent>
              <h1 style={{textAlign:"center" , color:"ButtonShadow"}}>Welcome Back!!</h1>  
              <h4 style={{textAlign:"center", color:"ButtonShadow", paddingTop:"20px"}}>Already have an account,then lets get started from where you left.</h4>
              
            </CardContent>
            <CardActions>
              <div className='mainbut'>
              <Link to="/login" >
              <a href={<Login/>}><Button size="large"  >Login</Button></a>
              </Link>
              </div>
            </CardActions>
              </Card>

            </div>
              
              
              <div className='login--card2'>
                  <Card sx={{ width: 475 ,backgroundColor:"#121212" , borderRadius:"15px"}}>
                    <CardContent>
                      <h1 style={{textAlign:"center" , color:"ButtonShadow"}}>Don't have an account..</h1>  
                      <h4 style={{textAlign:"center", color:"ButtonShadow", paddingTop:"20px"}}>Don't worry we got you , let's start by creating an account</h4>
                      
                    </CardContent>
                <CardActions>
                        <div className='mainbut'>
                        <Link to="/login" >
                          <Button size="large"  >SignUp </Button>
                          </Link>
                          </div>
                        </CardActions>
                      </Card>
                      </div>
          </Stack>
  
        
          </div>

      </div>
      </div>

    
  )
}