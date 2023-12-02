import React from 'react'
import dh from "../images/DH.png";
import instagram from "../images/ico-instagram.png";
import tiktok from "../images/ico-tiktok.png";
import whats from "../images/ico-whatsapp.png";


import { ContextGlobal } from "./utils/global.context";

const Footer = () => {

  return (
    <footer>
        <p>Juan Machado & Luisina Martinucci</p>
        <br/>
        <img src={dh} alt='DH-logo' className='logo' />
        <img src={instagram} alt='DH-logo' className='logo'/>
        <img src={tiktok} alt='DH-logo' className='logo'/>
        <img src={whats} alt='DH-logo'className='logo' />
        

    </footer>
  )
}

export default Footer
