import React from 'react'

const Part = ({title, exerciseCount}) => {
  console.log("Im a Part of the whole", title)
  return (
  <p>{title}: {exerciseCount} exercises</p>
  )
}

export default Part