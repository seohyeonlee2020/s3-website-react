import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name = "Vishal Sivasankar", college = "James Clark School University of Maryland College Park", department = "Mechanical Engineering", imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" }) => {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={`Team member ${name}`} className="team-image" loading="lazy" />
      <h3 className="team-name">{name}</h3>
      <p className="team-college"><em>{college}</em></p>
      <p className="team-department">{department}</p>
    </div>
  );
};

export default TeamCard;