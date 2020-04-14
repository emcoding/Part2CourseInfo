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
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundaments of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }
  
  // console.log(course)
  return (
    <>
      <Header title = {course.title} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </>
  )
}

ReactDOM.render (<App />, document.getElementById('root'))
