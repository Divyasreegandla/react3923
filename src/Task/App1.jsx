import React from 'react'
import DataFormTask from './DataFormTask'
import RegisterFormTask from './RegisterFormTask'
import StudentQ1 from './StudentQ1'
import WelcomeQ2 from './WelcomeQ2'
import CourseQ3 from './CourseQ3'
import FruitsQ4 from './FruitsQ4'
import EvenNumbersQ5 from './EvenNumbersQ5'
import MarksQ6 from './MarksQ6'
import OrderedListQ7 from './OrderedListQ7'
import Student1 from './Student1'
import TimerWatchTask from './TimerWatchTask'
import UserForm from './UserForm'
import Counter from './Counter'
import Timer from './Timer'
import "./File.css"
import Form from './Form'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home1 from './Home1'
import AboutUs from './AboutUs'
import Courses from './Courses'
import Contact1 from './Contact1'
import WebDevelopment from './WebDevelopment'
import MobileDevelopment from './MobileDevelopment'
import GameDevelopment from './GameDevelopment'
import DigitalMarketing from './DigitalMarketing'
import Finance from './Finance'
import '../index.css'
import MiniChat from './MiniChat'
import TicTacToe from './TicTacToe'
import CrudOperations from './CrudOperations'
import FinalTask from './FinalTask'
import Final from './Final'

export default function App1() {
  const display=false;
    // const studentnames=["Divya","bhavana","geetha","likhitha","charitha"]
  return (
    <div>
      {/* <Final/> */}
      {/* <FinalTask/> */}
      {/* <CrudOperations/> */}
      {/* <TicTacToe/> */}
      {/* <MiniChat/> */}
      {/* {
        display && (<nav>

        </nav>)
      }

      <BrowserRouter>
      <div className="linksStyle">
        <div className='links'>
        <Link className='items' to="/Home1">Home</Link>
        <Link className='items' to="/AboutUs">AboutUs</Link>
        <Link className='items' to="/Courses">Courses</Link>
        <Link className='items' to="/Contact1">ContactUs</Link>
      </div>
      </div>
      <Routes className="content">
        <Route path="/Home1" element={<Home1/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Courses" element={<Courses/>}>
        <Route path="WebDevelopment" element={<WebDevelopment/>}/>
        <Route path="MobileDevelopment" element={<MobileDevelopment/>}/>

        <Route path="GameDevelopment" element={<GameDevelopment/>}/>

        <Route path="DigitalMarketing" element={<DigitalMarketing/>}/>

        <Route path="Finance" element={<Finance/>}/>

        </Route>
        <Route path="/Contact1" element={<Contact1/>}/>


    
      </Routes>
      </BrowserRouter> */}
      {/* <Form/> */}
      {/* <div className="app-container">
      <UserForm />
      <Counter />
      <Timer />
      </div>
      <TimerWatchTask/>
        <StudentQ1 name="Divya" age="24"/>
       <WelcomeQ2/>
       <CourseQ3 course="React"/>
       <CourseQ3 course="java"/>
       <FruitsQ4/>
       <EvenNumbersQ5/>
       <MarksQ6 marks={40}/>
       <MarksQ6 marks={20}/>
       <OrderedListQ7 students={studentnames}/>

        <RegisterFormTask/>
      <DataFormTask/> */}






       {/* <Student1 /> */}
    </div>
  )
}
