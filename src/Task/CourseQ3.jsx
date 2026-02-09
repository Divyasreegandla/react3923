import React from 'react'

export default function CourseQ3({course}) {
  return (
    <div>
      {course==="React"?(<h2>You are learning React</h2>):(<h2>course not available</h2>)}
    </div>
  )
}
