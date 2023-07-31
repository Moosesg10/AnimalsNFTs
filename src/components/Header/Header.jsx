import React, { useContext, useEffect } from 'react'
import { Headers } from './HeadersDesktop'
import { HeaderResponsive } from './HeaderResponsive'
import ThemeContext from '../../context/ThemeContext'
import InnerWidth from '../InnerWidth'

const Header = () => {

const context = useContext(ThemeContext)
const responsive= context.responsive
const setResponvie = context.setResponsive;
const Widht = context.width

useEffect(() => {
  if(Widht <=800){
    setResponvie(true)
  }else{
    setResponvie(false)
  }
 }, [Widht])

  return (
    <>
      {
        !responsive  ? <Headers /> : <HeaderResponsive/>
      }
    </>
  )
}

export default Header
