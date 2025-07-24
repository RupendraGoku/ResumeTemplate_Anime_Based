import React from 'react';
import FuzzyText from './FuzzyText';

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white overflow-x-hidden">
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.4} 
        enableHover={true}
      >
        404 Page Not Found
      </FuzzyText>
    </div>
  );
};

export default NotFound;
