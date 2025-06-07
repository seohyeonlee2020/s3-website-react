import SustainabilityCard from './WhatWeOfferCard';
import './WhatWeOfferSection.css';

const WhatWeOfferSection = () => {
  return (
    <div className="sustainability-section">
      <h2 className="sustainability-heading">What S3 Has to Offer</h2>

      <div className="sustainability-card-container">
        <SustainabilityCard
          icon="📊"
          title="Present Your Work"
          description="Share your research and sustainability efforts to inspire the leaders of tomorrow at the Student Sustainability Summit (S3)."
        />
        <SustainabilityCard
          icon="💼"
          title="Career Paths in Sustainability"
          description="Students can explore different career paths related to sustainability and get advice from professionals in the field."
        />

         <SustainabilityCard
          icon="💼"
          title="Career Paths in Sustainability"
          description="Students can explore different career paths related to sustainability and get advice from professionals in the field."
        />


         <SustainabilityCard
          icon="💼"
          title="Career Paths in Sustainability"
          description="Students can explore different career paths related to sustainability and get advice from professionals in the field."
        />
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
