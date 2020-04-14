import React from 'react'
import Content from './Content'
import Header from './Header'

const Course = ({course}) => {
  console.log("I'm in the comp!", course)
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts}/>
      {/* <Total parts = {course.parts} /> */}
    </>
    )
}

//////////////////////

// const Total = props => {
//   // console.log(props.parts)
//   return  (
//   <p><em>Total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </em></p>
//   )
// }


export default Course