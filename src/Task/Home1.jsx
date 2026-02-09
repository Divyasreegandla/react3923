import React from 'react'
import { Link } from 'react-router-dom'

export default function Home1() {
  return (
    <div className='content'> 
       <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#2563eb' }}>Elevate Your Skills</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563', margin: '20px 0' }}>
          Explore professional courses in Tech, Finance, and Marketing.
        </p>
    </div>
    <Link to="/Courses" className="items" style={{ padding: '10px 25px', display: 'flex' }}>
          Browse All Courses
        </Link>
        <h2 style={{ border: '0.5px solid #eee', margin: '40px 0' }} />

      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Top Categories</h2>
      <div className="courses">
        <Link to="/WebDevelopment" className="linkco" style={{ padding: '30px', borderRadius: '12px', textAlign: 'center', minWidth: '100px' }}>
          <h3>Web Dev</h3>
        </Link>
        <Link to="/DigitalMarketing" className="linkco" style={{ padding: '30px', borderRadius: '12px', textAlign: 'center', minWidth: '100px' }}>
          <h3>Marketing</h3>
        </Link>
        <Link to="/Finance" className="linkco" style={{ padding: '30px', borderRadius: '12px', textAlign: 'center', minWidth: '100px' }}>
          <h3>Finance</h3>
        </Link>
      </div>
    </div>
  )
}