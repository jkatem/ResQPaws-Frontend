import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar'>
                <Link 
                    to='/'                    
                    style={{fontSize: "40px", alignSelf: "center", padding: "0 20px", color: "green"}}
                    >ResQPaws
                </Link>                
                {/* <Link to='/organizations'>SHELTER/RESCUE</Link>  */}
                <Link to='/dogs'>DOGS</Link>
                <Link to='/about'>ABOUT</Link>
        </div>
    )
}

export default NavBar
