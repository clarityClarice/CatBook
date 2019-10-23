import React from 'react'

import './Header.css'
import logo from '../assets/logo.png'

function Header(){
    return (
        <div className="Header">
            <div>
                <img src={logo} alt="catbook" width="50"/> <h1>Catbook</h1>
            </div>
            
            <div>
                <span>Meu perfil</span>
                <i className="material-icons">account_circle</i>
            </div>
        </div>
    )
}


export default Header