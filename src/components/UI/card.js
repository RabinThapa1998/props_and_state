import React from 'react'
import '../../styles/card.css'
export const Card = ({item}) => {
   
  return (
    <div className='card-container'>
        
        <h1 className='number'>{item.id}</h1>
        <h2 className='tiltle'>{item.title}</h2>
        { item.completed?<span className='completed'><h6>completed</h6></span>:<span className='not-completed'><h6>not-completed</h6></span>}
    </div>
  )
}
