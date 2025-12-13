import React from 'react';
import PropTypes from 'prop-types';

const ArtistGrid = ({ artists }) => {
  return (
    <div className="artist-grid">
      {artists.map((artist, index) => (
        <div key={index} className="artist-card">
          <div className="artist-image">
            <img src={artist.image} alt={artist.name} />
          </div>
          <div className="artist-content">
            <h3>{artist.name}</h3>
            <div className="artist-meta">
              <span className="genre">{artist.genre}</span>
              <span className="time">{artist.time}</span>
            </div>
            <p className="description">{artist.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

ArtistGrid.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArtistGrid;
