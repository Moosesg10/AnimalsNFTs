import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Grid2 from "@mui/material/Grid";
import team from "../assets/Team.json";
import CardTeam2 from "../components/Team/CardTeam2";
import InnerWidth from "../components/InnerWidth";
import ThemeContext from "../context/ThemeContext";

const initialState = [
  {
    name: "",
    id: "",
    description: "",
    img: "",
  },
];


const  Divs = styled.div`
  width: 100%;
  height: 100%;
  min-width: 250px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
-webkit-appearance: none;
background-color: transparent;

}

&::-webkit-scrollbar:vertical {
width:10px; 

}

&::-webkit-scrollbar-button:increment,
&::-webkit-scrollbar-button {
display: none;
} 

&::-webkit-scrollbar:horizontal {
height: 10px;
}

&::-webkit-scrollbar-thumb {
background-color: transparent;
border-radius: 20px;
border: 2px solid transparent;
}

&::-webkit-scrollbar-track {
border-radius: 10px;  
}

`

const Team = () => {
  const [datos, setDatos] = useState(initialState);
  const [resposive, setResposive] = useState(false)
 const Context = useContext(ThemeContext)
 const Width = Context.width

  useEffect(() => {
    if (Width <= 800) {
      setResposive(true);
     }else{
       setResposive(false)
     }
  }, [Width])

  useEffect(() => {
     setDatos(team.Team)
  }, [datos]);

  const Buba = team.Founder.map((data) => data)[0];

  return (
    <Divs>
     {!resposive ?
     <>
      <div
        style={{
          marginBottom:"2rem",
        }}
      >
      <CardTeam2 Data={Buba} aura={Buba.color} transform="scale(1.1)" key={Buba.id}/>
      </div>
      <Grid2
        container
        spacing={2}
        style={{
          display:"flex", justifyContent: "center" , alignItems:"flex-start",
          gap: "1rem",
          width:"100%",
          height:"50%", 
         
        }}
      >
        {datos.map((data) => (
        
            <CardTeam2 Data={data} aura={data.color} transform="scale(1.1)" key={data.id}/>
        
        ))}
      </Grid2>
     </>:
      <>
       <div
        style={{
          marginBottom:"2rem",
        }}
      >
      <CardTeam2 Data={Buba} aura={Buba.color}  transform="none"  key={Buba.id}/>
      </div>
      <Grid2
        container
        spacing={2}
        style={{
          display:"flex", justifyContent: "center" , alignItems:"flex-start",
          gap: "1rem",
          width:"100%",
          height:"50%", 
          marginLeft:"0.2rem"
        }}
      >
        {datos.map((data) => (
          <CardTeam2 Data={data} aura={data.color} transform="none" key={data.id}/>
        ))}
      </Grid2>
      
      </>
     }
    </Divs>
  );
};

export default Team;
