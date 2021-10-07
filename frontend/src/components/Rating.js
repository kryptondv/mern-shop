import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ val, text, color = '#f8e825' }) => {
    const renderStars = () => {
        return [...Array(5)].map((item, i) => {
            return (
                <i key={i} style={{ color }}>
                    {val >= i + 1 ? <FaStar /> : val > i ? <FaStarHalfAlt /> : <FaRegStar />}
                </i>
            );
        });
    };

    return (
        <div className="rating my-2">
            {renderStars()} of {text && text}
        </div>
    );
};

Rating.propTypes = {
    val: PropTypes.number.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
};

export default Rating;
