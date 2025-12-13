import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ArtistGrid = ({ artists }) => {
  // Group artists by day
  const groupedArtists = artists.reduce((acc, artist) => {
    const day = artist.day || 'Autres';
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(artist);
    return acc;
  }, {});

  const days = Object.keys(groupedArtists);

  // State to track expanded days. Default to the first day open.
  const [expandedDays, setExpandedDays] = useState(() => {
    const initial = {};
    if (days.length > 0) {
      initial[days[0]] = true;
    }
    return initial;
  });

  const toggleDay = (day) => {
    setExpandedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  return (
    <div className="artist-grid-container">
      {days.map(day => (
        <div key={day} className="day-section">
          <h3 
            className="day-title" 
            onClick={() => toggleDay(day)}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            {day}
            <span style={{ fontSize: '0.8em' }}>
              <FontAwesomeIcon icon={expandedDays[day] ? faChevronDown : faChevronRight} />
            </span>
          </h3>
          {expandedDays[day] && (
            <div className="artist-grid">
              {groupedArtists[day].map((artist, index) => (
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
          )}
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
      day: PropTypes.string,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArtistGrid;
