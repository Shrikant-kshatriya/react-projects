import React from 'react';
import Tour from './Tour';
const Tours = ({tours, remove}) => {
  return <section>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map(tour => {
        return <Tour remove={remove} key={tour.id} {...tour}/>
      })}
    </div>
    </section>;
};

export default Tours;
