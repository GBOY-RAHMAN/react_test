// this is jsx way
import React from 'react'

const Hello = () =>{
    // return (
    //     <div>
    //         <h1> 
    //           Hello Gboy
    //         </h1>
    //     </div>
    // )
 
    return React.createElement('div', null, "hello rahman")
}
export default Hello