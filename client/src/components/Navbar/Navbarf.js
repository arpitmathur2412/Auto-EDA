import React, { useState } from 'react'
import './NavbarStyles.css'
import {MenuItems} from "./MenuItems";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

export const Navbarf = () => {
    const navigate=useNavigate();
    const [state,setState] = useState({clicked : false})
    const handleClick = () => {
        setState({clicked : !state.clicked})
    }

    function onLogout(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate("/");
    }
    return (

        <nav className='NavbarItems'>
            <h1 className='navbar-logo'><strong>DataWise</strong></h1>

            <div className="menu-icons" onClick={handleClick}>
                <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            
            <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}

                {!localStorage.getItem('token') ?
                    <>
                        <Link className={'sign-in-up'} to={'/signin'}>Sign In</Link>
                    </>
                    :
                    <>
                        <Link className={'nav-links'} to={'/service'}>Service</Link>
                        <Button className='sign-in-up' onClick={onLogout}>Logout</Button>
                    </>
                }
            </ul>
        </nav>
    )
}
export default Navbarf;