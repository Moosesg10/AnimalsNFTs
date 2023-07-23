import { styled } from "styled-components"


 const SocialLinks ={
    position: "fixed",
    zIndex: "999",
    bottom: "-4vh",
    right: "2vw",
    width: "150px",
    height: "150px",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

 const Ul={
    display: "flex",
   justifyContent: "center",
   flexDirection: "row",
   gap: "0.5em",
}


 const Links=styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color:rgb(6, 6, 6);
    border-radius: 50%;
    font-size: 0.8em;  
    cursor:pointer;
     transition: transform 0.3s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`

 const Logo ={
    width: "40px",
    height: "40px",
    color:"#fff"
}



export {Logo ,Ul , Links , SocialLinks}