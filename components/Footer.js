import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { translations } from '../lib/translations'

const Footer = (props) => {
    const t = translations[props.lang].footer;
    return (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://www.facebook.com/p/Frahierstival-61573934457910/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.instagram.com/frahierstival_2026/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
        <p className="copyright">&copy; Frahier'stival. {t.design}: <a href="https://www.linkedin.com/in/hugomartineu/">Hugo Martineu</a>.</p>
    </footer>
    )
}

Footer.propTypes = {
    timeout: PropTypes.bool,
    lang: PropTypes.string
}

export default Footer
