import React from "react";
import { Links, Logo, SocialLinks, Ul } from "./Styles";
import magiceden from '../../assets/magiceden.svg'
import twitter from '../../assets/twitter.svg'
import discord from '../../assets/discord.svg'
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { useEffect } from "react";
import { useState } from "react";


export const SocialLink = () => {

  const context = useContext(ThemeContext)
  const Width = context.width


  const [mostarContent, setMostarContent] = useState(false)

  useEffect(() => {
    if(Width <= 600){
      setMostarContent(true)
    }
  }, [Width])


  return (

    !mostarContent ?<nav style={SocialLinks}>
      <ul style={Ul}>
        <li style={{listStyle:"none"}}>
        <Links href="https://twitter.com/animals_nft7" rel="no-oponner" target="_blank" >
          <img src={twitter} style={Logo} alt="twitter" />
        </Links>
        </li>
        <li style={{listStyle:"none"}}>
        <Links href="https://discord.gg/VJYH5VE8wu" rel="no-oponner" target="_blank" >
          <img src={discord} style={Logo} alt="discord" />
        </Links>
        </li>
      </ul>
    </nav>:""
  );
};
