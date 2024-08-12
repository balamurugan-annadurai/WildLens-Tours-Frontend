// StarRating.js
import React, { useState } from 'react';

const StarRating = ({ maxStars = 5, rating = 0, onChange }) => {
    const [hoveredStar, setHoveredStar] = useState(null);

    const handleClick = (index) => {
        const newRating = index + 1;
        if (typeof onChange === 'function') {
            onChange(newRating); // Pass the new rating to the parent component
        }
        console.log('Rating clicked:', newRating); // Log the rating change
    };

    const handleMouseEnter = (index) => {
        setHoveredStar(index);
    };

    const handleMouseLeave = () => {
        setHoveredStar(null);
    };

    return (
        <div className="star-rating">
            {Array.from({ length: maxStars }, (_, index) => (
                <span
                    key={index}
                    className={`star ${index < (hoveredStar !== null ? hoveredStar + 1 : rating) ? 'filled' : ''}`}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    &#9733; {/* Star character */}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
