import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const numCheck = (num) => {
    if(num > people.length-1)return 0
    else if(num < 0)return people.length-1
    else return num;
  }

  const handleChange = (e) => {
    (e.target.className === 'prev-btn')?setIndex(prev => numCheck(--prev)
    ):setIndex(prev => numCheck(++prev));
  }

  const suprise = () => {
    const ran = Math.floor(Math.random() * (people.length));
      if(ran === index) {suprise()}
      else {
        setIndex(ran);
      }; 
    
  }

  return <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={handleChange}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleChange}>
          <FaChevronRight />
        </button>
      </div>
        <button className='random-btn' onClick={suprise}>
          Suprise Me
        </button>
  </article>;
};

export default Review;
