import React from 'react';
import TeamCard from './TeamCard';
import './TeamCard.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Vishal Sivasankar",
      college: "James Clark School University of Maryland College Park",
      department: "Mechanical Engineering"
    },
    {
      name: "Member Two",
      college: "University of Maryland",
      department: "Environmental Science"
    },
    {
      name: "Member Three",
      college: "University of Maryland",
      department: "Computer Science"
    },

     {
      name: "Member Three",
      college: "University of Maryland",
      department: "Computer Science"
    },

     {
      name: "Member Three",
      college: "University of Maryland",
      department: "Computer Science"
    },

     {
      name: "Member Three",
      college: "University of Maryland",
      department: "Computer Science"
    }
  ];

  return (
    <div className="team-section-wrapper">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-cards-container">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index}
            name={member.name}
            college={member.college}
            department={member.department}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;