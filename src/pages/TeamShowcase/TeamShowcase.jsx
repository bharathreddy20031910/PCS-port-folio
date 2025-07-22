import React, { useState } from 'react';
import './TeamShowcase.scss';

const TeamShowcase = () => {
  const [visibleTeams, setVisibleTeams] = useState({});

  const toggleTeam = (team) => {
    setVisibleTeams((prev) => ({
      ...prev,
      [team]: !prev[team],
    }));
  };

  const teams = {
    'Internet of Things': [
      { name: 'Alok Halder', img: '/images/alok.jpg' },
      { name: 'Abhishek Ghosh', img: '/images/abhishek.jpg' },
      { name: 'Charlie', img: '/images/charlie.jpg' },
      { name: 'Daisy', img: '/images/daisy.jpg' },
    ],
    'MERN Stack': [
      { name: 'Eve', img: '/images/eve.jpg' },
      { name: 'Frank', img: '/images/frank.jpg' },
      { name: 'Grace', img: '/images/grace.jpg' },
    ],
    'JAVA Full-Stack': [
      { name: 'Henry', img: '/images/henry.jpg' },
      { name: 'Ivy', img: '/images/ivy.jpg' },
      { name: 'Jack', img: '/images/jack.jpg' },
    ],
    'Salesforce': [
      { name: 'Karen', img: '/images/karen.jpg' },
      { name: 'Leo', img: '/images/leo.jpg' },
      { name: 'Mia', img: '/images/mia.jpg' },
    ],
    'Management': [
      { name: 'Nina', img: '/images/nina.jpg' },
      { name: 'Oscar', img: '/images/oscar.jpg' },
      { name: 'Paul', img: '/images/paul.jpg' },
    ],
  };

  return (
    <div className="team-showcase-container">
    <div className="team-showcase">
      {/* Top 4 Members Section */}
      <div className="top-banner">
        {Object.values(teams)[0].slice(0, 4).map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.img} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>

      {/* Driven by Passion Section */}
      <div className="driven-section">
        <h2>Driven by Passion</h2>
      </div>

      {/* Team Sections */}
      {Object.entries(teams).map(([teamName, members]) => (
        <div className="team-section" key={teamName}>
          <div className="team-header">
            <h3>{teamName}</h3>
            {members.length > 3 && (
              <button onClick={() => toggleTeam(teamName)}>
                {visibleTeams[teamName] ? 'Hide' : 'View All'}
              </button>
            )}
          </div>
          <div className="team-members">
            {(visibleTeams[teamName] ? members : members.slice(0, 3)).map((member, index) => (
              <div className="member-card" key={index}>
                <img src={member.img} alt={member.name} />
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamShowcase;
