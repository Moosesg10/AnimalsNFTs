import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Cards=styled(Card)`
  background-color: #f4e9e9;
  transition: background , filter , transform  0.3s ease-in;
  max-height: 430px;
  max-width: 300px  ;
  
  &:hover{
    transform:${({transform}) => transform};
    filter: drop-shadow(0 0 1.5em ${({aura}) => aura})
  }

`
const CardContents=styled(CardContent)`

  &:last-child{
    padding-bottom: 0;
  }
`

export default function CardTeam2({Data,aura,transform}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    Data && <Cards aura={aura} transform={transform} >
      <CardMedia
          component="img"
          image={Data.img}
          alt="the wise"
          sx={{ height: "50%" , borderRadius:"50%", width: "50%" , margin:"0 auto"}}
        />
      <CardContents sx={{padding:"0 1rem", margin:"1rem auto"}}>
        <Typography variant="h4" sx={{textAlign:"center", fontSize:"2em" , color:"rgb(6,6,6)"}}>
        <del style={{fontWeight:"bold", fontStyle:"italic", fontFamily:"Bebas Neue"}}>{Data.name}</del>
        </Typography>
        <Typography variant="p" sx={{ display:"flex", justifyContent:"space-between" , textAlign:"left", fontSize:"1.5em",color:"rgb(6,6,6)",fontWeight:"bold", fontStyle:"italic", fontFamily:"Bebas Neue", padding:"0"}}>
            {Data.position}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
        >
          <ExpandMoreIcon htmlColor="rgb(6,6,6)" />
        </ExpandMore>
        </Typography>
      </CardContents>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContents>
          <Typography paragraph sx={{fontWeight:"bold", fontStyle:"italic", fontFamily:"Bebas Neue" ,textAlign:"center", fontSize:"small"}}>
          {Data.description}
          </Typography>
        </CardContents>
      </Collapse>
    </Cards>

  );
}
