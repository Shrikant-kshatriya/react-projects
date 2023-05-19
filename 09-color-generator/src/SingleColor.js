import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState();
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    if(alert){
     setInterval(() => setAlert(),2000)
    }
  },[alert])

  const handleClick = (e) => {
    const text = e.currentTarget.lastElementChild.innerText;
    console.log(text);
    navigator.clipboard.writeText(text);
    setAlert(`Copied to clipboard`);
  }
  return <article onClick={handleClick} className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}>
    <p className='percent-value'>
      {weight}%
    </p>
    <p className='color-value'>{hex}</p>
    {alert&&<p className='alert'>{alert}</p>}
  </article>
}

export default SingleColor
