import React from 'react'

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

const Header = ({title}) => (<h1>{title}</h1>)

const Content = ({parts}) => {
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

const Part = ({title, exerciseCount}) => {
  return (
  <p>{title}: {exerciseCount} exercises</p>
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