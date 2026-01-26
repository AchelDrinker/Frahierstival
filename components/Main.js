import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faChevronLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import ArtistGrid from './ArtistGrid';
import { translations, artistsData } from '../lib/translations';

const Main = (props) => {
  const [contactType, setContactType] = useState('general');
  const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const t = translations[props.lang];
  const artists = artistsData[props.lang];

  let close = <div className="close" onClick={() => {props.onCloseArticle()}} role="button" tabIndex="0" onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') props.onCloseArticle() }}></div>

  const handleSubmit = async (e, formId) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const switchContactType = (type) => {
    setContactType(type);
    setFormStatus(null);
  };

  return (
    <div id="main" style={props.timeout ? {display: 'flex'} : {display: 'none'}}>

      <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">{t.intro.title}</h2>
        <span className="image main">
          <Image src="/static/images/Frahierstival_feu_artifice.jpg" alt="Feu d'artifice du Frahier'stival" width={600} height={300} style={{width: '100%', height: 'auto'}} priority />
        </span>
        <h3 className="major" style={{textAlign: 'center', color: '#ff9f43'}}>{t.intro.date}</h3>
        <p>{t.intro.p1}</p>  
        <p>{t.intro.p2}</p>
        {close}
      </article>

      <article id="lineup" className={`${props.article === 'lineup' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">{t.lineup.title}</h2>
        <div className="lineup-intro">
          <p dangerouslySetInnerHTML={{__html: t.lineup.intro}}></p>
        </div>
        <ArtistGrid artists={artists} />
        {close}
      </article>

      <article id="billeterie" className={`${props.article === 'billeterie' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">{t.tickets.title}</h2>
        <span className="image main">
          <Image src="/static/images/Frahierstival_scene.jpg" alt="Scène du Frahier'stival" width={600} height={300} style={{width: '100%', height: 'auto'}} />
        </span>
        <p dangerouslySetInnerHTML={{__html: t.tickets.p1}}></p>
        <p dangerouslySetInnerHTML={{__html: t.tickets.p2}}></p>
        <p dangerouslySetInnerHTML={{__html: t.tickets.p3}}></p>
        <ul className="actions" style={{marginBottom: '2rem'}}>
          <li><a href={t.tickets.url} target="_blank" rel="noopener noreferrer" className="button special icon fa-ticket">{t.tickets.button}</a></li>
        </ul>
        {close}
      </article>

      <article id="access" className={`${props.article === 'access' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">{t.access.title}</h2>
        <span className="image main">
          <Image src="/static/images/Frahierstival_guitare.jpg" alt="Guitare Frahier'stival" width={600} height={300} style={{width: '100%', height: 'auto'}} />
        </span>
        <p>{t.access.p1}</p>
        <p>{t.access.p2}</p>
        <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '1rem', margin: '2rem 0'}}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: '0.5rem'}}/> {t.access.address}
        </p>
        <ul className="actions" style={{textAlign: 'center', marginBottom: '2rem'}}>
          <li><a href="https://www.google.com/maps/place/FRAHIER'STIVAL/@47.6536846,6.7400916,17z/data=!4m15!1m8!3m7!1s0x479238d7855b4581:0x8fdd5975a4e04d65!2sRue+du+Moulin,+70400+Frahier-et-Chatebier!3b1!8m2!3d47.6544218!4d6.7427845!16s%2Fg%2F1tf6w8gp!3m5!1s0x479239006c4df163:0xb48c2b4d90a85cbd!8m2!3d47.6525281!4d6.7393727!16s%2Fg%2F11xtf10786?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="button special icon fa-map-marker">{t.access.directions}</a></li>
        </ul>
        {close}
      </article>

      <article id="equipe" className={`${props.article === 'equipe' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">{t.team.title}</h2>
        <span className="image main">
          <Image src="/static/images/Equipe.jpg" alt="L'équipe des bénévoles du Frahier'stival" width={600} height={300} style={{width: '100%', height: 'auto'}} />
        </span>
        <p>{t.team.p1}</p>
        <p>{t.team.p2}</p>
        <p>{t.team.p3}</p>
        {close}
      </article>

      <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">{t.contact.title}</h2>

        <div className="contact-slider-container">
          <div className={`contact-slider-track ${contactType === 'artist' ? 'show-artist' : 'show-general'}`}>
            
            {/* Slide 1: General Contact */}
            <div className={`contact-slide ${contactType === 'general' ? 'active' : ''}`}>
              <h3>{t.contact.general.title}</h3>
              {formStatus === 'success' && contactType === 'general' ? (
                <div className="box">
                   <p style={{textAlign: 'center', color: '#ffffff', fontWeight: 'bold'}}>{t.contact.form.success}</p>
                   <div style={{textAlign: 'center'}}>
                     <button onClick={() => setFormStatus(null)}>OK</button>
                   </div>
                </div>
              ) : (
                <>
                  <form onSubmit={(e) => handleSubmit(e, 'mnjakewo')}>
                    {formStatus === 'error' && contactType === 'general' && <p style={{color: '#ff4444'}}>{t.contact.form.error}</p>}
                    <div className="field half first">
                      <label htmlFor="name">{t.contact.general.name}</label>
                      <input type="text" name="name" id="name" required disabled={formStatus === 'submitting'} />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">{t.contact.general.email}</label>
                      <input type="email" name="email" id="email" required disabled={formStatus === 'submitting'} />
                    </div>
                    <div className="field">
                      <label htmlFor="message">{t.contact.general.message}</label>
                      <textarea name="message" id="message" rows="2" required disabled={formStatus === 'submitting'}></textarea>
                    </div>
                    <ul className="actions">
                      <li><input type="submit" value={formStatus === 'submitting' ? '...' : t.contact.general.send} className="special" disabled={formStatus === 'submitting'} /></li>
                      <li><input type="reset" value={t.contact.general.reset} disabled={formStatus === 'submitting'} /></li>
                    </ul>
                  </form>
                  
                  <div className="switch-btn-container center">
                    <span className="switch-link" onClick={() => switchContactType('artist')}>
                      {t.contact.general.switchToArtist} <FontAwesomeIcon icon={faChevronRight} className="icon" />
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Slide 2: Artist Contact */}
            <div className={`contact-slide ${contactType === 'artist' ? 'active' : ''}`}>
              <div className="switch-btn-container">
                <span className="switch-link" onClick={() => switchContactType('general')}>
                  <FontAwesomeIcon icon={faChevronLeft} className="icon" /> {t.contact.artist.switchToGeneral}
                </span>
              </div>

              <h3 style={{color: '#ff9f43'}}>{t.contact.artist.title}</h3>
              <p>{t.contact.artist.intro}</p>
              
              {formStatus === 'success' && contactType === 'artist' ? (
                <div className="box">
                   <p style={{textAlign: 'center', color: '#ffffff', fontWeight: 'bold'}}>{t.contact.form.success}</p>
                   <div style={{textAlign: 'center'}}>
                     <button onClick={() => setFormStatus(null)}>OK</button>
                   </div>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, 'xpwvgbng')}>
                  {formStatus === 'error' && contactType === 'artist' && <p style={{color: '#ff4444'}}>{t.contact.form.error}</p>}
                  <div className="field half first">
                    <label htmlFor="artist-name">{t.contact.artist.name}</label>
                    <input type="text" name="artist-name" id="artist-name" required disabled={formStatus === 'submitting'} />
                  </div>
                  <div className="field half">
                    <label htmlFor="artist-email">{t.contact.artist.email}</label>
                    <input type="email" name="email" id="artist-email" required disabled={formStatus === 'submitting'} />
                  </div>
                  <div className="field">
                    <label htmlFor="artist-links">{t.contact.artist.links}</label>
                    <input type="text" name="links" id="artist-links" placeholder="https://..." required disabled={formStatus === 'submitting'} />
                  </div>
                  <div className="field">
                    <label htmlFor="artist-message">{t.contact.artist.message}</label>
                    <textarea name="message" id="artist-message" rows="2" required disabled={formStatus === 'submitting'}></textarea>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value={formStatus === 'submitting' ? '...' : t.contact.artist.send} className="special" disabled={formStatus === 'submitting'} /></li>
                  </ul>
                </form>
              )}
            </div>

          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem'}}>
          <ul className="icons">
            <li><a href="https://www.facebook.com/p/Frahierstival-61573934457910/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.instagram.com/frahierstival/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
          </ul>
        </div>
        {close}
      </article>

      <article id="legal" className={`${props.article === 'legal' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">{t.legal.title}</h2>
        <h3>{t.legal.editor.title}</h3>
        <p dangerouslySetInnerHTML={{__html: t.legal.editor.content}}></p>
        <h3>{t.legal.hosting.title}</h3>
        <p dangerouslySetInnerHTML={{__html: t.legal.hosting.content}}></p>
        <h3>{t.legal.privacy.title}</h3>
        <p dangerouslySetInnerHTML={{__html: t.legal.privacy.content}}></p>
        <h3>{t.legal.credits.title}</h3>
        <p dangerouslySetInnerHTML={{__html: t.legal.credits.content}}></p>
        {close}
      </article>

    </div>
  )
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
