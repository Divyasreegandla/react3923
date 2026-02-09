import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Courses() {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Courses List</h2>
      <div className='courses'>
        <Link className='linkco' to="WebDevelopment">Web Development</Link>
        <Link className='linkco' to="MobileDevelopment">Mobile Development</Link>

        <Link className='linkco' to="GameDevelopment">Game Development</Link>

        <Link className='linkco' to="DigitalMarketing">DigitalMarketing</Link>

        <Link className='linkco' to="Finance">Finance</Link>
        <Outlet/>

      </div>
    </div>
  )
}
