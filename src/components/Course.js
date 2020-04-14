import React from 'react'

const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts}/>
      <Total parts = {course.parts} />
    </div>
    )
}

const Header = ({title}) => (<h3>{title}</h3>)

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