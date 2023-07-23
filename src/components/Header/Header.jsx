import React, { useContext, useEffect } from 'react'
import { Headers } from './HeadersDesktop'
import { HeaderResponsive } from './HeaderResponsive'
import ThemeContext from '../../context/ThemeContext'
import InnerWidth from '../InnerWidth'

const Header = () => {

const context = useContext(ThemeContext)
const responsive= context.responsive
const setResponvie = context.setResponsive;
let width = InnerWidth();

useEffect(() => {
  if(width <=600){
    setResponvie(true)
  }else{
    setResponvie(false)
  }
 }, [width])

  return (
    <>
      {
        !responsive  ? <Headers /> : <HeaderResponsive/>
      }
    </>
  )
}

export default Header
