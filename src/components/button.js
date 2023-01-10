import * as React from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Stack from '@mui/material/Stack';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Buttons() {
  return (
    <Stack direction="column" spacing={2} >
      <div className='butt1'>
      <Button variant='contained' startIcon={<GoogleIcon/>} style={{borderRadius:35,padding:"10px 45px",color:"white",width:400, backgroundColor:"black"}}>
        Sign in with Google
      </Button></div>
      <div className='butt2'>
      <Button variant="contained" startIcon={<FacebookSharpIcon/>} style={{borderRadius:35,padding:"10px 45px",color:"white",width:400}}>
        Sign in with Facebook
      </Button></div>
      <div className='butt3'>
      <Button variant='contained' startIcon={<GitHubIcon/>} style={{borderRadius:35,padding:"10px 45px",color:"white",width:400, backgroundColor:"black"}}>
        Sign in with GitHub
      </Button></div>
    </Stack>
  );
}
