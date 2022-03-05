import './App.css';
import {AppBar, Container,Button,TextField, Toolbar, Typography,Box, ImageList, ImageListItem} from '@material-ui/core';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  const [opt,setOpt] = useState('');

const handler = useEffect(()=>{
    axios.get(`http://pixabay.com/api/?key=25967398-f6f1b18d4101cb8929670a1b1&q=${opt}&image_type=photo
    `).then(
        response =>{
           setData(response.data.hits)
           console.log(response.data.hits);
        }
    )
},[])

const submitHandler = (e) => {
  e.preventDefault();
  console.log(opt);
}
  

  return (
    <div >
      <AppBar position='static' color='primary'>
        <Toolbar variant='regular'  >
          <Typography variant='h5'>PhotoGraphy</Typography>
        </Toolbar>
      </AppBar>
      <Container align="center" >
        <Typography variant='h3' >
          <Box sx={{
            fontWeight:'lite',
            letterSpacing: 3,
            textTransform:'uppercase',
             mt:12}}>Our Latest Version of PhotoGraphy</Box>
        </Typography>
        <Box sx={{
          fontWeight:'lite',
          letterSpacing: 2,
          textTransform:'uppercase',
          mt:2}}>Please to take your photos as well,Please fill the below form for any new updates</Box>
      </Container>

      <form >
      <Box sx={{mt:3}} align='center'>
      <TextField id="outlined-basic"  size="small" label="Search Items" 
              sx={{width:800}} variant="outlined" onChange={(e)=>setOpt(e.target.value)}/> &nbsp;
      <Button variant="contained" size='' color="primary" onSubmit={handler}>Search</Button>
      </Box>
      </form>

      <Container >
        <Box sx={{mt:5}}>
        <ImageList variant='masonry' rowHeight={170} gap={7} cols={4}>
          {data.map((imgdata,id) => 
            <ImageListItem cols={1} key={id}>
              <img src={imgdata.largeImageURL} alt={imgdata.tags} />
            </ImageListItem>
          )}
        </ImageList>
        </Box>
      </Container>
    </div>
  );
}

export default App;
