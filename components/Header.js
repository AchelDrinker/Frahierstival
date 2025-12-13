import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-regular-svg-icons'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <img src="/static/images/Frahierstival_logo.png" alt="Frahierstival Logo" style={{ height: '80%', marginTop: '0.7rem' }} />
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>FRAHIER'STIVAL</h1>
                <p>L'énergie d'un festival, l'âme d'un village.</p>
                <p>Vendredi 14 & Samedi 15 Août 2026</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('lineup')}}>Line Up</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('billeterie')}}>Billetterie</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('equipe')}}>Equipe</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
