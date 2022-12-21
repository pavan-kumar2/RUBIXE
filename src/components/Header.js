import React from 'react'
import './header.css'
export const Header = () => {
  return (
    <div className='header'>
        <div className='header-img'>
        <img src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="Rubixe-logo"/>
        </div>
        <div className='header-nav'>
            <nav>
                <ul>
                    <li><a href='#'>HOME</a> </li>
                    <li><a href='#'>SERVICES</a> </li>
                    <li><a href='#'>PRODUCTS</a></li>
                    <li><a href='#'>AI INTERNSHIP</a></li>
                    <li><a href='#'>CAREER</a></li>
                    <li><a href='#'>BLOG</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>CONTACT US</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
