import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = ({setLocale}) => {
    return ( 
        <div>
            <ul>
                <li>
                    <h1>MY TODOS</h1> 
                </li>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <button onClick={() => {setLocale('en')}}>
                        EN
                    </button>
                </li>
                <li>
                    <button onClick={() => {setLocale('ko')}}>
                        KR
                    </button>
                </li>
            </ul>
        </div>
     );
}

export default NavBar