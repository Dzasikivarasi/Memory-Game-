import React from 'react';

export default function Card({ id, url, description, isVisible, isFinished, onCardClick }) {
    const className = `${isVisible ? 'card-show' : ''
        } ${isFinished ? 'card-finished' : ''
        }`;

    const handleClick = () => {
        if (isFinished) {
            return;
        }
        onCardClick(id);
    }

    return (
        <li onClick={handleClick} className={`card ${className}`}>
            <img src={url} alt={description} />
        </li>
    )
}
