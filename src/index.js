import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = props => (<h1>{props.title}</h1>)

const Total = props => {
  // console.log(props.parts)
  return  (
  <p><em>Total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </em></p>
  )
}

const Part = props => {
  const title = props.part.name
  const numberOfExercises = props.part.exercises
  
  return (
    <>
      {title}: {numberOfExercises} exercises
    </>
  )
}

const Content = props => {
  return (
  <>     
      <p><Part part = {props.parts[0]} /></p>
      <p><Part part = {props.parts[1]} /></p>
      <p><Part part = {props.parts[2]} /></p>
   </>
    );
}


const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  // console.log(course)
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render (<App />, document.getElementById('root'))
