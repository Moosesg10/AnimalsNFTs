import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';






const Cards=styled(Card)`
  background-color: #f4e9e9;
  transition: background , filter , transform  0.3s ease-in;
  max-height: 630px;
  max-width: 280px  ;
  min-width: 250px ;
  min-height: 250px ;
;
  &:hover{
    filter: drop-shadow(0 0 1.5em ${({aura}) => aura})
  }

`
const CardContents=styled(CardContent)`

  &:last-child{
    padding-bottom: 0;
  }
`

export default function CardTeam2({Data,aura,transform}) {


  return (

    Data && <Cards aura={aura} transform={transform} >
      <img
         
          src={Data.img}
          alt="the wise"
          style={{ height: "200px" , width: "100%" , margin:"0 auto", padding:"0"}}
        />
      <CardContents sx={{padding:"0 1rem", margin:"1rem auto"}}>
        <Typography variant="h4" sx={{textAlign:"center", fontSize:"2em" , color:"rgb(6,6,6)"}}>
        <del style={{fontWeight:"bold", fontStyle:"italic", fontFamily:"Bebas Neue"}}>{Data.name}</del>
        </Typography>
        <Typography variant="p" sx={{ display:"flex", justifyContent:"space-between" , textAlign:"left", fontSize:"1.5em",color:"rgb(6,6,6)",fontWeight:"bold", fontStyle:"italic", fontFamily:"Bebas Neue", padding:"0"}}>
            {Data.position}
        </Typography>
      </CardContents>
    </Cards>

  );
}
