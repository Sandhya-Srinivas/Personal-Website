import React from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    return(
        <div className='navBar'>
            <NavLink 
                activeClassName='selected'
                className='not-selected'
                to='/'><button> <img className='icons' src='https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg' name='Home' alt='Home'/></button></NavLink> <br/>
            
            <NavLink 
                activeClassName='selected'
                className='not-selected'
                to='/About'> <button> <img className='icons' src='https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png' name='About' alt='About'/></button></NavLink><br/>
            <NavLink 
                    activeClassName='selected'
                    className='not-selected'
                    to='/Projects'> <button> <img className='icons' src='https://upload.wikimedia.org/wikipedia/commons/7/78/Success%2C_by_Gregor_%C4%8Cre%C5%A1nar.svg' name='Projects' alt='Projects'/></button></NavLink><br/>
            <NavLink 
                activeClassName='selected'
                className='not-selected'
                to='/Skills'> <button> <img className='icons' src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Gnome-computer.svg' name='Skills' alt='Skills'/></button></NavLink><br/>
            <NavLink 
                activeClassName='selected'
                className='not-selected'
                to='/Engineering'> <button> <img className='icons' src='https://wiki.faforever.com/images/f/f9/Beginner_Information.png' name='Engineering' alt='Engineering'/></button></NavLink><br/>
            {/* <NavLink 
                activeClassName='selected'
                className='not-selected'
                to='/Insta'> <button> <img className='icons' src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Font_Awesome_5_brands_instagram.svg' name='Insta' alt='Insta'/></button></NavLink><br/> */}
        </div>
    )
}