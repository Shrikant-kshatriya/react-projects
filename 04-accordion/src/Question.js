import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [isClicked, setClicked] = useState(false);

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button onClick={() => {setClicked(!isClicked)}} className='btn'>
        {isClicked?<AiOutlineMinus />:<AiOutlinePlus />}
      </button>
    </header>
    {isClicked && <p>{info}</p>}
  </article>;
};

export default Question;
