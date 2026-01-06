import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { translations } from '../lib/translations'

const Footer = (props) => {
    const t = translations[props.lang].footer;
    return (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://www.facebook.com/p/Frahierstival-61573934457910/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.instagram.com/frahierstival/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.google.com/maps/place/FRAHIER'STIVAL/@47.6536846,6.7400916,17z/data=!4m15!1m8!3m7!1s0x479238d7855b4581:0x8fdd5975a4e04d65!2sRue+du+Moulin,+70400+Frahier-et-Chatebier!3b1!8m2!3d47.6544218!4d6.7427845!16s%2Fg%2F1tf6w8gp!3m5!1s0x479239006c4df163:0xb48c2b4d90a85cbd!8m2!3d47.6525281!4d6.7393727!16s%2Fg%2F11xtf10786?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></a></li>
        </ul>
        <p className="copyright">&copy; Frahier'stival. {t.design}: <a href="https://www.linkedin.com/in/hugomartineu/">Hugo Martineu</a>.<br/><a href="#" onClick={(e) => {e.preventDefault(); props.onOpenArticle('legal')}}>Mentions Légales</a></p>
    </footer>
    )
}

Footer.propTypes = {
    timeout: PropTypes.bool,
    lang: PropTypes.string,
    onOpenArticle: PropTypes.func
}

export default Footer
