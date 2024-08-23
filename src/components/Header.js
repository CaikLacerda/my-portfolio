import React from 'react';
import './Header.css'

function Header() {
    return(
        <div className='header'>
            <span className='name-header'>&lt;Caik Lacerda /&gt;</span>
            <nav className='nav-header'>
                <ul className='list-header'>
                    <li className='above-me'><a href="#">Sobre mim</a></li>
                    <li className='projects'><a href="#">Projetos</a></li>
                    <li className='contacts'><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;