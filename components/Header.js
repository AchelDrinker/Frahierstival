import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import { translations } from '../lib/translations'

const Header = (props) => {
    const t = translations[props.lang].header;
    return (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <img src="/static/images/Frahierstival_logo.png" alt="Frahierstival Logo" style={{ height: '80%', marginTop: '0.7rem' }} />
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>FRAHIER'STIVAL</h1>
                <p>{t.subtitle}</p>
                <p>{t.date}</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('intro')}}>{t.menu.intro}</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('lineup')}}>{t.menu.lineup}</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('billeterie')}}>{t.menu.tickets}</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('equipe')}}>{t.menu.team}</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); e.stopPropagation(); props.onOpenArticle('contact')}}>{t.menu.contact}</a></li>
            </ul>
        </nav>
    </header>
    )
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
    lang: PropTypes.string
}

export default Header
