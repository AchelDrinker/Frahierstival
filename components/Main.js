import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faChevronLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ArtistGrid from './ArtistGrid';
import { translations, artistsData } from '../lib/translations';

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contactType: 'general'
    };
  }

  render() {
    const t = translations[this.props.lang];
    const artists = artistsData[this.props.lang];

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}} role="button" tabIndex="0" onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{t.intro.title}</h2>
          <span className="image main"><img src="/static/images/Frahierstival_feu_artifice.jpg" alt="" /></span>
          <h3 className="major" style={{textAlign: 'center', color: '#ff9f43'}}>{t.intro.date}</h3>
          <p>{t.intro.p1}</p>  
          <p>{t.intro.p2}</p>
          {close}
        </article>

        <article id="lineup" className={`${this.props.article === 'lineup' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{t.lineup.title}</h2>
          <div className="lineup-intro">
            <p dangerouslySetInnerHTML={{__html: t.lineup.intro}}></p>
          </div>
          <ArtistGrid artists={artists} />
          {close}
        </article>

        <article id="billeterie" className={`${this.props.article === 'billeterie' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{t.tickets.title}</h2>
          <span className="image main"><img src="/static/images/Frahierstival_scene.jpg" alt="" /></span>
          <p dangerouslySetInnerHTML={{__html: t.tickets.p1}}></p>
          <p dangerouslySetInnerHTML={{__html: t.tickets.p2}}></p>
          <p dangerouslySetInnerHTML={{__html: t.tickets.p3}}></p>
          <ul className="actions" style={{marginBottom: '2rem'}}>
            <li><a href="https://www.helloasso.com/associations/frahierstival/evenements/frahier-stival-2026" target="_blank" rel="noopener noreferrer" className="button special icon fa-ticket">{t.tickets.button}</a></li>
          </ul>
          {close}
        </article>

        <article id="equipe" className={`${this.props.article === 'equipe' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{t.team.title}</h2>
          <span className="image main"><img src="/static/images/Equipe.jpg" alt="" /></span>
          <p>{t.team.p1}</p>
          <p>{t.team.p2}</p>
          <p>{t.team.p3}</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{t.contact.title}</h2>

          <div className="contact-slider-container">
            <div className={`contact-slider-track ${this.state.contactType === 'artist' ? 'show-artist' : 'show-general'}`}>
              
              {/* Slide 1: General Contact */}
              <div className={`contact-slide ${this.state.contactType === 'general' ? 'active' : ''}`}>
                <h3>{t.contact.general.title}</h3>
                <form method="post" action="https://formspree.io/f/myzrobka">
                  <div className="field half first">
                    <label htmlFor="name">{t.contact.general.name}</label>
                    <input type="text" name="name" id="name" required />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">{t.contact.general.email}</label>
                    <input type="email" name="email" id="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="message">{t.contact.general.message}</label>
                    <textarea name="message" id="message" rows="2" required></textarea>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value={t.contact.general.send} className="special" /></li>
                    <li><input type="reset" value={t.contact.general.reset} /></li>
                  </ul>
                </form>
                
                <div className="switch-btn-container center">
                  <span className="switch-link" onClick={() => this.setState({contactType: 'artist'})}>
                    {t.contact.general.switchToArtist} <FontAwesomeIcon icon={faChevronRight} className="icon" />
                  </span>
                </div>
              </div>

              {/* Slide 2: Artist Contact */}
              <div className={`contact-slide ${this.state.contactType === 'artist' ? 'active' : ''}`}>
                <div className="switch-btn-container">
                  <span className="switch-link" onClick={() => this.setState({contactType: 'general'})}>
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" /> {t.contact.artist.switchToGeneral}
                  </span>
                </div>

                <h3 style={{color: '#ff9f43'}}>{t.contact.artist.title}</h3>
                <p>{t.contact.artist.intro}</p>
                
                <form method="post" action="https://formspree.io/f/mldqypoo">
                  <div className="field half first">
                    <label htmlFor="artist-name">{t.contact.artist.name}</label>
                    <input type="text" name="artist-name" id="artist-name" required />
                  </div>
                  <div className="field half">
                    <label htmlFor="artist-email">{t.contact.artist.email}</label>
                    <input type="email" name="email" id="artist-email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="artist-links">{t.contact.artist.links}</label>
                    <input type="text" name="links" id="artist-links" placeholder="https://..." required />
                  </div>
                  <div className="field">
                    <label htmlFor="artist-message">{t.contact.artist.message}</label>
                    <textarea name="message" id="artist-message" rows="2" required></textarea>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value={t.contact.artist.send} className="special" /></li>
                  </ul>
                </form>
              </div>

            </div>
          </div>

          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <p style={{marginBottom: '1rem'}}>
              <strong>Frahier'stival</strong><br/>
              {t.contact.address}
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=Rue+du+Moulin,+70400+Frahier-et-Chatebier" target="_blank" rel="noopener noreferrer" className="button">
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: '0.5rem'}}/> {t.contact.directions}
            </a>
          </div>

          <ul className="icons">
            <li><a href="https://www.facebook.com/p/Frahierstival-61573934457910/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.instagram.com/frahierstival/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  lang: PropTypes.string
}

export default Main