import React from 'react'

export default function Contact1() {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>ContactUs</h2>
       <h3 style={{textAlign:"left", paddingLeft:"250px"}}>Get in Touch</h3>
      <p style={{textAlign:"left",paddingLeft:"150px"}}>Have questions about our courses?
        We're hee to help you
      </p>
      <ul style={{paddingLeft:"150px"}}>
        <li>Email:support@course.com</li>
        <li>Phone: +91 9876543210</li>
        <li>Office:Education,Tech City</li>
      </ul>

      <div style={{flex:1,minWidth:"300px"}}>
        <form style={{flexDirection:"row",gap:"15px",textAlign:"center"}} >
            <input type="text" placeholder='Your name' style={{padding:"10px",borderRadius:"5px",fontSize:"16px"}}/>
             <input type="text" placeholder='Your email' style={{padding:"10px",borderRadius:"5px",fontSize:"16px"}}/>
              <input type="text" placeholder='Your message' style={{padding:"10px",borderRadius:"5px",fontSize:"16px"}}/>
              <button style={{padding:"10px 20px",cursor:"pointer"}} type='submit'>Send message</button>
        </form>
      </div>
     
    </div>
  )
}
