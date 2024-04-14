import React from 'react';

const TestimonialCard = ({ name, quote }) => {
  const cardStyle = {
    height: '210px', // Fixed height
    width: '100%',  // Full width of the slide
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#333', // Dark background color
    color: 'white', // Text color for dark theme
    padding: '20px', // Padding inside the card
    boxSizing: 'border-box' // Ensures padding doesn't affect overall dimensions
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg" style={cardStyle}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className='font-bold text-xl mb-2'>{name}</div>
          <p className='text-base'>{quote}</p>
        </div>
        <div className="text-sm">
          <p className='text-gray-400'>Dark Theme</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;