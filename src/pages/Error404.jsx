import { Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {


    let navigate =useNavigate()
    const goHome= () =>{
        navigate("/")
    }

  return (
    <>
      <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20rem auto",
            gap: "1em",
            border: "thin solid #222",
            width: "30%",
            borderRadius: "2em",
            background: "#ccc",
          }}
      >
        <h2>Page no fund </h2>
        <Divider orientation="vertical" flexItem />
        <h2 >Error 404</h2>
        <button style={{display:"block", position:"absolute", top:"46vh", left:"48.5vw", border:"thin solid #222" , background:"#aed7ee", borderRadius:"2em", fontSize:"1em", fontFamily:"Bebas Neue" , fontStyle:"oblique", fontWeight:"600", width:"60px"}} onClick={goHome}>Home</button>
      </div>
     
    </>
  );
};
