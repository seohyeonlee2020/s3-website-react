import './WhatWeOfferCard.css';
import { FaChalkboardTeacher } from 'react-icons/fa';

const WhatWeOfferCard = () => {
  return (
    <div className="sustainability-card">
      <FaChalkboardTeacher className="card-icon" />
      <h3 className="card-title">Present Your Work</h3>
      <p className="card-text">
        Share your research and sustainability efforts to inspire the leaders of tomorrow at the
        Student Sustainability Summit (S3).
      </p>
    </div>
  );
};

export default WhatWeOfferCard;