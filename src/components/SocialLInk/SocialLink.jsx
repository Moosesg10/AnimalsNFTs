import React from "react";
import { Links, Logo, SocialLinks, Ul } from "./Styles";
import magiceden from '../../assets/magiceden.svg'
import twitter from '../../assets/twitter.svg'
import discord from '../../assets/discord.svg'


export const SocialLink = () => {
  return (
    <nav style={SocialLinks}>
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
    </nav>
  );
};
