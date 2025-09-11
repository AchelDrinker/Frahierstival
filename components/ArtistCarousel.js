import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArtistCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      touchStart: null,
      touchEnd: null
    };
  }

  nextArtist = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.artists.length
    }));
  }

  prevArtist = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex === 0 
        ? this.props.artists.length - 1 
        : prevState.currentIndex - 1
    }));
  }

  goToArtist = (index) => {
    this.setState({ currentIndex: index });
  }

  // Gestion du touch/swipe
  handleTouchStart = (e) => {
    this.setState({ touchEnd: null, touchStart: e.targetTouches[0].clientX });
  }

  handleTouchMove = (e) => {
    this.setState({ touchEnd: e.targetTouches[0].clientX });
  }

  handleTouchEnd = () => {
    if (!this.state.touchStart || !this.state.touchEnd) return;
    
    const distance = this.state.touchStart - this.state.touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      this.nextArtist();
    }
    if (isRightSwipe) {
      this.prevArtist();
    }
  }

  // Support clavier
  handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      this.prevArtist();
    } else if (e.key === 'ArrowRight') {
      this.nextArtist();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { artists } = this.props;
    const { currentIndex } = this.state;
    const currentArtist = artists[currentIndex];

    return (
      <div className="artist-carousel">
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={this.prevArtist} aria-label="Artiste précédent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div 
            className="artist-card"
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            <div className="artist-image">
              <img src={currentArtist.image} alt={currentArtist.name} />
            </div>
            <div className="artist-info">
              <h3>{currentArtist.name}</h3>
              <p className="artist-genre">{currentArtist.genre}</p>
              <p className="artist-time">{currentArtist.time}</p>
              <p className="artist-description">{currentArtist.description}</p>
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={this.nextArtist} aria-label="Artiste suivant">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="carousel-counter">
          <span className="counter-numbers">{currentIndex + 1} / {artists.length}</span>
        </div>
      </div>
    );
  }
}

ArtistCarousel.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArtistCarousel;