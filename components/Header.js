import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-regular-svg-icons'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <span className="icon fa-diamond"></span> */}
            <img src="/static/images/Frahierstival_logo.png" alt="Frahierstival Logo" style={{ height: '80%', marginTop: '0.7rem' }} />
        </div>
        <div className="content">
            <div className="inner">
                <h1>FRAHIER'STIVAL</h1>
                <p>L'énergie d'un festival, l'âme d'un village.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('lineup')}}>Line Up</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('billeterie')}}>Billetterie</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('equipe')}}>Equipe</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
