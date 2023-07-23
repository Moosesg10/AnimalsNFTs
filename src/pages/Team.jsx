import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Grid2 from "@mui/material/Grid";
import team from "../assets/Team.json";
import CardTeam2 from "../components/Team/CardTeam2";
import InnerWidth from "../components/InnerWidth";

const initialState = [
  {
    name: "",
    id: "",
    description: "",
    img: "",
  },
];


const  Divs = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`

const Team = () => {
  const [datos, setDatos] = useState(initialState);
  const [resposive, setResposive] = useState(false)
 const Width =  InnerWidth()


  useEffect(() => {
    if (Width <= 700) {
      setResposive(true);
     }else{
       setResposive(false)
     }
  }, [Width])
  useEffect(() => {
    setDatos(team.Team);
  }, []);

  const Buba = team.Founder.map((data) => data)[0];

  return (
    <Divs>
     {!resposive ? <h2
        style={{
          fontSize: "1.8em",
          textDecoration: "underline",
          padding: "1rem",
          fontWeight: "bold",
          fontStyle: "italic",
          fontFamily: "Bebas Neue",
        }}
      >
        THE WISE
      </h2>:""}
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
      <div></div>
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
