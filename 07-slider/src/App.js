import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const handleIndex = (event) => {
    if(event.currentTarget.className === 'prev'){
      if(index === 0)setIndex(people.length - 1)
      else setIndex(index - 1)
    }else if(event.currentTarget.className === 'next'){
      next()
    }
  }

  const next = () => {
    if(index === people.length - 1)setIndex(0)
      else setIndex(index + 1)
  }
  useEffect(() => {
    let slider = setInterval(next, 3000)
    return () => clearInterval(slider)
  },[index])
  return <section className='section'>
    <div className='title
    '>
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className='section-center'>
      {people.map((person, pIndex) => {
        const {id, image, name, title, quote} = person;
        let position = "nextSlide";
        if(pIndex === index){
          position = "activeSlide"
        }else if(pIndex === index - 1 || ((index === 0) && pIndex === people.length - 1)){
          position = "prevSlide"
        }
        return <article className={position} key={id}>
          <img src={image} alt={name} className='person-img'/>
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })}
      <button className='prev' onClick={handleIndex}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={handleIndex}>
        <FiChevronRight />
      </button>
    </div>
  </section>;
}

export default App;
