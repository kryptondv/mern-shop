import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ val, text }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= val; i++) {
            stars.push('full');
        }
        if (val % 1 > 0) stars.push('half');
        for (let i = 1; i < 5 - stars.length; i++) {
            stars.push('empty');
        }
        return stars.map((star, i) => (
            <React.Fragment key={i}>
                {star === 'full' ? <FaStar /> : star === 'half' ? <FaStarHalfAlt /> : <FaRegStar />}
            </React.Fragment>
        ));
    };

    return (
        <div className="rating">
            {renderStars()} of {text}
        </div>
    );
};

export default Rating;
