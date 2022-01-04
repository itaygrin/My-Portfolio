import { useState } from "react";
import { Link } from 'react-router-dom';
import Dropdown from "../dropdown/Dropdown";
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    //toggle menu click
    const handleClick = () => { setClick(!click); };

    const closeMobileMenu = () => { setClick(false) };

    //responsiveness - if on mobile (i.e width<960) than don't show dropdown menu (setDropdown(false))
    const onMouseEnter = () => { window.innerWidth < 960 ? setDropdown(false) : setDropdown(true) };
    const onMouseLeave = () => { setDropdown(false) };

    const handleDropDownDom = () => {
        return (
            <>
                <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/Education' className="nav-links" onClick={closeMobileMenu}>
                        Education
                    </Link>
                </li>
                <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/Employment' className="nav-links" onClick={closeMobileMenu}>
                        Employment
                    </Link>
                </li>
                <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/Hobbies' className="nav-links" onClick={closeMobileMenu}>
                        Hobbies
                    </Link>
                </li>

            </>
        );
    };

    return (
        <nav className="navbar">
            <Link to='/' className="navbar-logo">
                Itay Grinberg
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {/* if clicked, display fa-time (X) otherwise display hamburger-menu icon */}
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                        About <i className="fas fa-caret-down" />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                {!dropdown && click && handleDropDownDom()}
                <li className="nav-item">
                    <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    {/* <Link to='https://github.com/itaygrin' className="nav-links" onClick={closeMobileMenu}>
                        Github
                    </Link> */}
                    <a href="https://github.com/itaygrin"  className="nav-links" onClick={closeMobileMenu}>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/itay-grinberg/"  className="nav-links" onClick={closeMobileMenu}>
                        LinkedIn
                    </a>
                </li>



                {/* <li className="nav-item">
                    <Link to='/education' className="nav-links" onClick={ closeMobileMenu }>
                        Education
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/employment' className="nav-links" onClick={ closeMobileMenu }>
                        Employement
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/hobbies' className="nav-links" onClick={ closeMobileMenu }>
                        Hobbies
                    </Link>
                </li> */}


            </ul>
        </nav>
    )
}

export default Navbar;