import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Tristan</strong>, a full stack web developer
                    growing my skills in the field.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
