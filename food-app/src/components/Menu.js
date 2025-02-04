import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card.js'
import { MenuItems } from './MenuItems.js';
import './Menu.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Menu() {
  return (

    <div className='menu'>  
    <h1>Our Menu</h1>
    <div>  
    <Box >
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, md: 12,lg:12 }}>
        {console.log(MenuItems, "men")}
           {MenuItems.map((menuItem, index)=>{
             return (
               <Grid
                 key={index}
                 item
                 xs={12}
                 md={6}
                 lg={4}
                 style={{
                   marginTop: "30px",
                   display: "flex",
                   justifyContent: "center",
                 }}
               >
                  <Card
                   id={menuItem.id}
                   image={menuItem.image}
                   name={menuItem.name}
                   price={Math.round(menuItem.price)}
                   rating={menuItem.rating}
                 />
               </Grid>
             );
           })}
         
      </Grid>
    </Box>
    </div> 
    </div>
  );
}
