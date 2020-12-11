import React, {useState} from 'react'
import {BsPersonFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import Sidebar from './Sidebar';

function Nav() {

    const [sidebarIsOpen,setSidebarIsOpen] = useState(false);
    return (
        <div className="nav">
            <div className="nav__container">
            <div className="nav__links">
                <p className="nav__link">Home</p>
                <p className="nav__link">Recipes</p>
                <p className="nav__link">About</p>
                <p className="nav__link">Events</p>
                <div className="nav__icons">
                    <div className="nav__heart">
                        <AiOutlineHeart className="nav__icon"/>
                    </div>
                    <div className="nav__heart">
                        <BsPersonFill className="nav__icon"/>
                    </div>
                </div>
            </div>
            <div className="nav__hamburger">
                <GiHamburgerMenu className="nav__burger" onClick={()=>setSidebarIsOpen(true)}/>
            </div>
            </div>
            <Sidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen}/>
        </div>
    )
}

export default Nav
