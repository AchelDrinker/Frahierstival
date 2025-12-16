import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ArtistGrid from './ArtistGrid';

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contactType: 'general'
    };

    // Données des 13 artistes et animations
    this.artists = [
      {
        name: "Mountain Echo",
        genre: "Country/Bluegrass",
        time: "17h00 - 18h15",
        day: "Vendredi",
        description: "Authenticité country et sonorités bluegrass pour une évasion musicale vers les grands espaces américains.",
        image: "/static/images/pic03.jpg"
      },
      {
        name: "Jazz Collective",
        genre: "Jazz/Fusion",
        time: "18h45 - 20h00",
        day: "Vendredi",
        description: "Formation jazz moderne explorant les frontières entre tradition et innovation dans un style fusion contemporain.",
        image: "/static/images/pic02.jpg"
      },
      {
        name: "Les Troubadours",
        genre: "Folk/Acoustique",
        time: "20h30 - 21h45",
        day: "Vendredi",
        description: "Trio acoustique proposant des reprises folk et des compositions originales dans une ambiance intimiste et chaleureuse.",
        image: "/static/images/pic01.jpg"
      },
      {
        name: "Acoustic Soul",
        genre: "Soul/R&B",
        time: "22h15 - 23h30",
        day: "Vendredi",
        description: "Voix puissante et guitares acoustiques pour un voyage musical dans l'univers de la soul et du R&B contemporain.",
        image: "/static/images/pic03.jpg"
      },
      {
        name: "Miss Pepper",
        genre: "Rock/Pop",
        time: "00h00 - 01h15",
        day: "Vendredi",
        description: "Formation rock énergique avec des influences pop modernes. Miss Pepper apporte une énergie contagieuse sur scène avec des mélodies accrocheuses.",
        image: "/static/images/MissPepper.jpg"
      },
      {
        name: "The Vintage Band",
        genre: "Rock Vintage",
        time: "01h45 - 03h00",
        day: "Vendredi",
        description: "Groupe reprenant les grands classiques du rock des années 60-70 avec une énergie et une authenticité remarquables.",
        image: "/static/images/pic01.jpg"
      },
      {
        name: "Celtic Winds",
        genre: "Musique Celtique",
        time: "17h00 - 18h00",
        day: "Samedi",
        description: "Musique traditionnelle celtique avec cornemuses, violons et bodhrán pour un voyage en terres irlandaises.",
        image: "/static/images/pic02.jpg"
      },
      {
        name: "Chanson Française",
        genre: "Chanson/Variété",
        time: "18h15 - 19h00",
        day: "Samedi",
        description: "Reprises et créations dans la pure tradition de la chanson française, portées par une voix authentique et émouvante.",
        image: "/static/images/pic02.jpg"
      },
      {
        name: "Concours de Cancoillotte",
        genre: "Animation / Gastronomie",
        time: "19h00 - 19h45",
        day: "Samedi",
        description: "Le grand concours annuel de la meilleure cancoillotte ! Venez déguster et voter pour votre recette préférée dans une ambiance conviviale.",
        image: "/static/images/pic01.jpg"
      },
      {
        name: "Indie Collective",
        genre: "Indie Rock",
        time: "20h15 - 21h15",
        day: "Samedi",
        description: "Son indie rock alternatif avec des mélodies mélancoliques et des arrangements soignés par de jeunes talents locaux.",
        image: "/static/images/pic01.jpg"
      },
      {
        name: "Reggae Sunshine",
        genre: "Reggae/Ska",
        time: "21h45 - 22h45",
        day: "Samedi",
        description: "Vibrations reggae positives et rythmes ska entraînants pour une ambiance estivale et décontractée.",
        image: "/static/images/pic03.jpg"
      },
      {
        name: "Urban Groove",
        genre: "Hip-Hop/Rap",
        time: "23h15 - 00h30",
        day: "Samedi",
        description: "Rap français avec des textes engagés et des beats travaillés, représentant la nouvelle scène hip-hop locale.",
        image: "/static/images/pic01.jpg"
      },
      {
        name: "Electric Dreams",
        genre: "Électro/Synthwave",
        time: "01h00 - 03h00",
        day: "Samedi",
        description: "Duo électronique explorant les sonorités synthwave et ambient, parfait pour clôturer la soirée en beauté.",
        image: "/static/images/pic02.jpg"
      }
    ];
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}} role="button" tabIndex="0" onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/Frahierstival_feu_artifice.jpg" alt="" /></span>
          <h3 className="major" style={{textAlign: 'center', color: '#ff9f43'}}>Vendredi 14 & Samedi 15 Août 2026</h3>
          <p>Le Frahier’stival est un événement musical et convivial qui prend vie au cœur de Frahier, village où nature et partage se rencontrent. Né de la volonté de rassembler habitants, familles et passionnés de musique, il offre une ambiance champêtre et chaleureuse, où la culture s’invite en plein air.</p>  
          <p>Concerts, animations et moments de rencontre rythment la journée, permettant à chacun de découvrir de nouveaux artistes, de vibrer ensemble et de profiter d’un cadre verdoyant. Plus qu’un simple rendez-vous musical, le Frahier’stival est une fête locale portée par des bénévoles et partenaires engagés, qui célèbrent la richesse du territoire et l’esprit de convivialité.</p>
          {close}
        </article>

        <article id="lineup" className={`${this.props.article === 'lineup' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Line Up</h2>
          <div className="lineup-intro">
            <p>Découvrez les artistes et animations exceptionnels qui feront vibrer le Frahier'stival les <strong>Vendredi 14 et Samedi 15 Août 2026</strong> ! Une programmation éclectique qui traverse tous les genres musicaux, de 17h00 à 03h00.</p>
          </div>
          <ArtistGrid artists={this.artists} />
          {close}
        </article>

        <article id="billeterie" className={`${this.props.article === 'billeterie' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Billetterie</h2>
          <span className="image main"><img src="/static/images/Frahierstival_scene.jpg" alt="" /></span>
          <p>Préparez-vous pour le Frahier'stival 2026 ! Rejoignez-nous les <strong>Vendredi 14 et Samedi 15 Août</strong> pour deux jours inoubliables de musique et de partage au cœur de notre village.</p>
          <p><strong>En réservant vos places, vous soutenez une association à but non lucratif. Si vous le pouvez, pensez à ajouter un don lors de votre commande</strong></p>
          <p> Votre générosité est essentielle pour nous aider à pérenniser le festival et continuer à vous offrir de beaux moments !</p>
          <p><strong>Nouveau :</strong> Nos t-shirts officiels sont désormais disponibles ! Vous pouvez les commander directement via notre billetterie en ligne.</p>
          <ul className="actions" style={{marginBottom: '2rem'}}>
            <li><a href="https://www.helloasso.com/associations/frahierstival/evenements/frahier-stival-2026" target="_blank" rel="noopener noreferrer" className="button special icon fa-ticket">Réserver mes places / Faire un don</a></li>
          </ul>
          {close}
        </article>

        <article id="equipe" className={`${this.props.article === 'equipe' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Equipe</h2>
          <span className="image main"><img src="/static/images/equipe.jpg" alt="" /></span>
          <p>Derrière chaque sourire, chaque installation et chaque note de musique, il y a une équipe formidable : nos 40 bénévoles.</p>
          <p>Sans eux, le Frahier’stival n’existerait pas. Ils donnent de leur temps, de leur énergie et de leur bonne humeur pour que le festival se déroule dans les meilleures conditions. De la mise en place des scènes à l’accueil du public, de la restauration à la communication, chacun apporte sa pierre à l’édifice avec passion et engagement.</p>
          <p>Leur enthousiasme est contagieux, leur motivation exemplaire : ce sont eux qui font du Frahier’stival un événement authentique, convivial et chaleureux.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>

          <div className="contact-slider-container">
            <div className={`contact-slider-track ${this.state.contactType === 'artist' ? 'show-artist' : 'show-general'}`}>
              
              {/* Slide 1: General Contact */}
              <div className={`contact-slide ${this.state.contactType === 'general' ? 'active' : ''}`}>
                <h3>Nous contacter</h3>
                <form method="post" action="https://formspree.io/f/myzrobka">
                  <div className="field half first">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" id="name" required />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="2" required></textarea>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value="Envoyer" className="special" /></li>
                    <li><input type="reset" value="Réinitialiser" /></li>
                  </ul>
                </form>
                
                <div className="switch-btn-container center">
                  <span className="switch-link" onClick={() => this.setState({contactType: 'artist'})}>
                    Vous êtes un artiste ? C'est par ici <FontAwesomeIcon icon={faChevronRight} className="icon" />
                  </span>
                </div>
              </div>

              {/* Slide 2: Artist Contact */}
              <div className={`contact-slide ${this.state.contactType === 'artist' ? 'active' : ''}`}>
                <div className="switch-btn-container">
                  <span className="switch-link" onClick={() => this.setState({contactType: 'general'})}>
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" /> Retour au formulaire classique
                  </span>
                </div>

                <h3 style={{color: '#ff9f43'}}>Candidature Artiste</h3>
                <p>Vous souhaitez proposer votre candidature pour la prochaine édition du Frahier'stival ?</p>
                
                <form method="post" action="https://formspree.io/f/mldqypoo">
                  <div className="field half first">
                    <label htmlFor="artist-name">Nom du groupe / Artiste</label>
                    <input type="text" name="artist-name" id="artist-name" required />
                  </div>
                  <div className="field half">
                    <label htmlFor="artist-email">Email de contact</label>
                    <input type="email" name="email" id="artist-email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="artist-links">Liens (Site web, YouTube, Spotify...)</label>
                    <input type="text" name="links" id="artist-links" placeholder="https://..." required />
                  </div>
                  <div className="field">
                    <label htmlFor="artist-message">Présentation & Motivation</label>
                    <textarea name="message" id="artist-message" rows="2" required></textarea>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value="Envoyer ma candidature" className="special" /></li>
                  </ul>
                </form>
              </div>

            </div>
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
  timeout: PropTypes.bool
}

export default Main