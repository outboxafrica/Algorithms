import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

export default function BlogNav() {
    return (
        <nav className='header'>
            <Link to='/' className='header-logo'>
               <p style={{fontSize: "2rem"}}>EDU-Community</p> 
            </Link>

            <ul className='header-links'>
            
                <li className='header-list'>
                <Link to='/lookbook' className='header-link'>
                    <span>LookBook</span>
                </Link>
                </li>

                <li className='header-list'>
                
                 <Avatar name="F" size="30" round={true} textSizeRatio={1.65}/>
                </li>
            </ul>
        </nav>
    )
}
