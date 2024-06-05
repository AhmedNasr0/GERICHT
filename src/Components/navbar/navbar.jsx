import { useState } from 'react';
import images from '../../constants/images'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './navbar.css'
const Navbar=()=>{
    const [menu,setMenu]=useState(false);
    return <>
        <div className="app_navbar">
            <a href="/" className="app_navbar-logo">
                <img src={images.gericht} alt="Logo" />
            </a>
            <ul className="app_navbar-links">
                <li className="nav_link" href="#home">Home</li>
                <li className="nav_link" href="#about">About</li>
                <li className="nav_link" href="#menu">Menu</li>
                <li className="nav_link" href="#awards">Awards</li>
                <li className="nav_link" href="#contact">Contact</li>
            </ul>
            <div className="app_navbar-login">
                <a href="#login">Log In / Regestration</a>
                <div/>
                <a href="/">Book Table</a>
            </div>
            <div className="app_navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>setMenu(true)} />
                {menu && (
                  <div className="app_navbar-smallscreen_overlay">
                    <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setMenu(false)} />
                    <ul className="app__navbar-smallscreen_links">
                      <li><a href="#home" onClick={() => setMenu(false)}>Home</a></li>
                      <li><a href="#about" onClick={() => setMenu(false)}>About</a></li>
                      <li><a href="#menu" onClick={() => setMenu(false)}>Menu</a></li>
                      <li><a href="#awards" onClick={() => setMenu(false)}>Awards</a></li>
                      <li><a href="#contact" onClick={() => setMenu(false)}>Contact</a></li>
                    </ul>
                  </div>
                )}
            </div>
        </div>

    </>
}
export default Navbar 