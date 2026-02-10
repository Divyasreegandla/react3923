import React, {useState,useContext, createContext } from 'react'
import Greeting from './Greeting'
import ConditionalRendering from './Component/ConditionalRendering'
import ListRendering from './Component/ListRendering'
import UsestateCount from './Component/UsestateCount'
import Dark from './Component/Dark'
import FieldUseState from './Component/FieldUseState'
import RegisterForm from './Component/RegisterForm'
import DataForm from './Component/DataForm'
import UseEffectHook from './Component/UseEffectHook'
import UseEffectTimer from './Component/UseEffectTimer'
import TimerWatch from './Component/TimerWatch'
import UseEffectAIP from './Component/UseEffectAPI'
import UseRefHook from './Component/UseRefHook'
import First from './Context/First'
import ContextHook from './ContextTheme/ContextHook'
import UseReducerHook from './Component/UseReducerHook'
import UseReducerForm from './Component/UseReducerForm'
import UseIdHook from './Component/UseIdHook'
import { BrowserRouter, Route, Routes , Link} from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Service from './Router/Service'
import Contact from './Router/Contact'
import './index.css'
import WebDevelopment from './Router/WebDevelopment'
import AppDevelopment from './Router/AppDevelopment'
import BlogDetails from './Component/BlogDetails'
import FinalTask from './Task/FinalTask'


export const Pass = createContext();

export default function App() {
  // const name="Divya Sree"
  // const city="salem TN"
  // const address= "abc street,xyz colony"
  const display=false;

  
  // const [mode, setMode] = useState("light");
  // const data = { name: "divya" };

  return (
  <div>
    <FinalTask/>
    {/* {
      display && (<nav>

      </nav>)
    } */}
  
    {/* <BrowserRouter>
    {/* <div style={{textAlign:"center",display:"flex",justifyContent:"center",gap:"20px"}}> */}
      {/* <div className="header">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Service" >Service</Link>
      <Link to="/Contact" >Contact</Link>
      </div> */}
    {/* </div> */}
    {/* <Routes> */}
      {/* dont create any divisions here */}
      {/* <Route path="/" element={<Home />}/>
       <Route path="/About" element={<About />}/>
        <Route path="/Service" element={<Service />}>
        <Route path="WebDevelopment" element={<WebDevelopment/>}/>
        <Route path="AppDevelopment" element={<AppDevelopment/>}/>
        </Route>
        
         <Route path="/Contact" element={<Contact />}/>
         <Route path="/Blogs/:id" element={<BlogDetails/>}/>
      </Routes> */}
   
      {/* </BrowserRouter> */} 

      {/* <UseIdHook/>
    <UseReducerForm/>
    <UseReducerHook/>
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <Pass.Provider value={{ mode, setMode, data }}>
          <ContextHook />
        </Pass.Provider>
      </div>
      <nav style={{ border: "2px solid black", padding: "20px" }}>
        <h2>App commponent</h2>
        <Pass.Provider value={name}>
          <First />
        </Pass.Provider>
      </nav>
      <UseRefHook/>
      <UseEffectAIP/>
      <TimerWatch/>
      <UseEffectTimer/>
      <UseEffectHook/>
      <DataForm/>
      <RegisterForm/>
      <FieldUseState/>
      <Dark/>
      <UsestateCount/>
      <h2>List Rendering</h2>
      <ListRendering/>
      <h2>Conditional Rendering</h2>
      <ConditionalRendering/>
      <h2>Good Morning all</h2>
      <h3>My name is {name}</h3>
      
      {display? <Greeting name={name} city={city}/>:<Greeting name={name} city={address}/>} 
      
      <Greeting name={name} city={address}/> */}
      
    </div>
  )
}
