import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Service() {
  return (
    <div>
      <h2>Service component</h2>
      <div className="ServiceMenu">
        <Link to={"WebDevelopment"}>Web Development</Link>
        <Link to={"AppDevelopment"}>App Development</Link>
       <div>
        {/* <h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla quibusdam eius provident ipsum recusandae laboriosam exercitationem omnis. Cupiditate culpa libero atque expedita! Ducimus, magni?</p>
        </h1> */}
         <Outlet/>
       </div>
       

      </div>
    </div>
  )
}
