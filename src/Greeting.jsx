//(Props):

//first method-props declaration

// import React from 'react'

// export default function Greeting(props) {
//   return (
//     <div>
//         <h2>Name as {props.firstName}</h2>
//         <h3>My city : {props.city}</h3>
//         <input type="text" />
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//          Deleniti rerum ipsam quisquam blanditiis hic ex,
//           voluptatem maiores quaerat architecto accusamus voluptas
//            illum distinctio tempore et repellat iure soluta accusantium
//             libero.</p>
    
//     </div>
//   )
// }

//second method -destructuring of props

import React from 'react'

export default function Greeting({name,city,address}) {
  return (
    <div>
        <h2>Name as {name}</h2>
        <h3>My city : {city}</h3>
        {/* <h3>My Address: {address}</h3> */}
        <input type="text" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Deleniti rerum ipsam quisquam blanditiis hic ex,
          voluptatem maiores quaerat architecto accusamus voluptas
           illum distinctio tempore et repellat iure soluta accusantium
            libero.</p>
    
    </div>
  )
}

