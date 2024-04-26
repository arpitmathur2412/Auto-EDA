import './NavbarStyles.css'
import {Component} from "react";
import {MenuItems} from "./MenuItems";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
// import {Link} from "react-router-dom";


class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {

        return (

            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>StockWise</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    {!localStorage.getItem('token') ? <Link className={'sign-in-up'} to={'/signin'}>Sign In</Link> :
                        <Button className='sign-in-up' onClick={(e) => {
                            const navigate = useNavigate();
                            e.preventDefault()
                            localStorage.removeItem('token');
                            navigate("/");
                        }}>Logout</Button>}

                </ul>
            </nav>
        )
    }
}


export default Navbar




