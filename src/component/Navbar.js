import React, { Component } from 'react'
import '../App.css';

//  function Navbar() {
//   return (
//     <div>
      
//     </div>
//   )
// }

class Navbar extends Component {
    render(){
        
        return  <header id='nav_header'>
        <section className='username-section'> 
        <div></div>
        <div className='username'><select>
            <option>English</option>
            <option >French</option>
        </select>
         < p className='sigining'>{this.props.username}</p></div>
        </section>

        <div className='header-link'>
            <h3>JOB APPLICATION TRACKER</h3>
            <ul id='data-links'>
                 <li>Track Job</li>
                <li>Track Job</li>
                <li>Export Record</li>
            </ul>
            </div>
        
            
       
        </header>

    }
}

export default Navbar