import Link from 'next/link'
import React from 'react'
import './nav.css'
import { Bell } from 'lucide-react'


const NavBar = () => {
    return (
        <nav className="main-nav">
            <h1>YourBlog</h1>
            <ul className='nav-list'>
                <li>
                    <Link className='navlistText' href='/'>Home</Link>
                </li>
                <li>
                    <Link className='navlistText' href='/'>Feed</Link>
                </li>
                <div className='divider'></div>
                <li>
                    <Link className='navlistText navButton' href='/'>Create +</Link>
                </li>
            </ul>
            <div className='nav-login'>
            <Bell />
                <Link className='navtext loginButton' href='/'>Login</Link>
                <Link className='navtext' href='/'>Register</Link>
            </div>
        </nav>
    )
}

export default NavBar