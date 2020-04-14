import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
  console.log("I'm in the content!", parts);
  return (
    <>
    <ul>
      {parts.map(part => 
        <Part key={part.id} title={part.name} exerciseCount={part.exercises} />
      )}
     </ul>
    </>
  )      
}

export default Content