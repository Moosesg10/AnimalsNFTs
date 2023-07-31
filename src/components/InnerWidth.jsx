import React, { useEffect, useState } from 'react'

const InnerWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

 
    useEffect(() => {
      const Width = () => setWidth(window.innerWidth)
      window.addEventListener('change' , Width)
    }, [width])
    
  return width
}

export default InnerWidth
