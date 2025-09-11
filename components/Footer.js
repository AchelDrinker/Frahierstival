import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Frahier'stival. Design: <a href="https://www.linkedin.com/in/hugomartineu/">Hugo Martineu</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
