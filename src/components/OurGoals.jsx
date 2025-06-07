import React from 'react';
import './OurGoals.css';
import { FaGraduationCap, FaGlobe, FaLeaf } from 'react-icons/fa';

const OurGoals = () => {
  return (
    <section className="goals-section">
      <h2 className="goals-title">Our Goals</h2>
      <div className="goals-container">
        <div className="goal-item">
          <FaGraduationCap className="goal-icon" />
          <p className="goal-text">
            Encourage the future leaders in sustainability through equitable education.
          </p>
        </div>
        <div className="goal-item">
          <FaGlobe className="goal-icon" />
          <p className="goal-text">
            Establish a collaborative network of sustainability.
          </p>
        </div>
        <div className="goal-item">
          <FaLeaf className="goal-icon" />
          <p className="goal-text">
            Explore the expansive nature and interconnectedness of sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
