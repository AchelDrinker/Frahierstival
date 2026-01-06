import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

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

  // State to track expanded days. Default to no days open.
  const [expandedDays, setExpandedDays] = useState({});

  const toggleDay = (day) => {
    setExpandedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  return (
    <div className="artist-grid-container">
      {days.map(day => (
        <div key={day} className={`day-section ${expandedDays[day] ? 'expanded' : ''}`}>
          <h3 
            className="day-title" 
            onClick={() => toggleDay(day)}
          >
            <span>{day}</span>
            <span className="toggle-icon">
              <FontAwesomeIcon icon={expandedDays[day] ? faChevronDown : faChevronRight} />
            </span>
          </h3>
          {expandedDays[day] && (
            <div className="artist-grid">
              {groupedArtists[day].map((artist, index) => (
                <div key={index} className="artist-card">
                  <div className="artist-image">
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                      <Image 
                        src={artist.image} 
                        alt={artist.name} 
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
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
      image: PropTypes.string.isRequired,
      genre: PropTypes.string,
      time: PropTypes.string,
      description: PropTypes.string,
      day: PropTypes.string
    })
  ).isRequired
};

export default ArtistGrid;
