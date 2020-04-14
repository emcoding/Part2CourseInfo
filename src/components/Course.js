import React from 'react'

const Course = ({course}) => {
  // console.log("I'm in the Course component!", course)
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts}/>
      <Total parts = {course.parts} />
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

const Part = ({title, exerciseCount}) => ( <p>{title}: {exerciseCount} exercises</p>)

const Total = ({parts}) => {
  const exerciseNumbers = parts.map(part => part.exercises) ;
  const sum = exerciseNumbers.reduce((count, number) => count + number, 0);
  
  return  (
  <p><em>The total number of exercises is {sum} </em></p>
  )
}

export default Course