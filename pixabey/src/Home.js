import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button,AppBar, Toolbar, Typography,TextField,Grid} from '@mui/material';

const Home = () => {
  let history = useHistory();
  const [imgName,setImgName] = useState('');
  return (
    
    <div className='bgimage'>
          <AppBar position="static" color='' >
             <Toolbar >
                <Typography variant="h4" component="div" color="primary" sx={{ flexGrow: 1 }}>PizzaConor</Typography>
                <TextField   id="outlined-basic" size="small"  label="Search Items"  variant="outlined" /> &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" size='small' color="info">Login</Button> &nbsp;
                <Button variant="contained" size='small' color="secondary">Signup</Button> &nbsp;
             </Toolbar>
           </AppBar>
           <div style={{textAlign:"center" , marginTop:"150px"}}>
             <Typography variant='h4' color='secondary'>
              Tasty Pizzas & royalty free stock</Typography>
            
              <Typography variant='h6' color='black' padding='20px'>
              Over 2.5 million+ customers, 120+ countries and 60+ varaities shared by excellence..
              </Typography>

              <TextField   id="outlined-basic"  size="small" label="Search Items" 
              sx={{width:500}} variant="outlined" onChange={(e)=>setImgName(e.target.value)} /> <br/>
            
              <div style={{padding:'10px'}}>
              <Button variant="contained" size='small' color="success" 
              onClick={()=> imgName && history.push(`/search?name=${imgName}`)} >Search</Button>
            </div>
            </div>
    </div>
  )
  
}

export default Home
