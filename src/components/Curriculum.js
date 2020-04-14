import React from 'react'
import Course from './Course'

const Curriculum = ({courses}) => {
  // console.log("This walks like a duck", courses )
  return (
    <>
    <h2>Full Stack Curriculum</h2>
      {courses.map(course => 
        <Course key={course.id} course={course}  />
      )}
    </>
  )
}


export default Curriculum