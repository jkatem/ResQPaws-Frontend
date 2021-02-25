import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div className="header">
              
            {/* <Link to='/organizations'>SHELTER/RESCUE</Link>  */}
            <Link to='/api/v1/dogs'>DOGS</Link>
            <Link 
                to='/api/v1'                    
                style={{fontSize: "40px", alignSelf: "center", padding: "0 20px", color: "Black"}}
                >ResQPaws
            </Link>   
            <Link to='/api/v1/about'>ABOUT</Link>
        </div>
    )
}

export default NavBar
