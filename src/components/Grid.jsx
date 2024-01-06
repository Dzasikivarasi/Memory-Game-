import React from 'react';
import Card from './Card.jsx';
import { TIMEOUT } from '../settings.js';

export default function Grid({ images = [], finishedItems = [], checkItems, imagesType }) {
    const [visibleItems, setVisibleItems] = React.useState([]);

    const handleCardClick = (id) => {
        if (visibleItems.includes(id) || finishedItems.includes(id)) {
            return;
        }
        switch (visibleItems.length) {
            case 0:
                setVisibleItems([id]);
                break;

            case 1:
                setVisibleItems((items) => [...items, id]);
                checkItems(visibleItems[0], id);
                setTimeout(() => {
                    setVisibleItems([]);
                }, TIMEOUT);
                break;

            default:
                setVisibleItems([]);
        }
    }

    const cards = images.map((item) => (
        <Card
            id={item.id}
            key={item.id}
            url={item.url}
            description={item.description}
            isVisible={visibleItems.includes(item.id)}
            isFinished={finishedItems.includes(item.id)}
            onCardClick={handleCardClick}
        />
    ))

    return (
        <ul className={`cards cards-theme-${imagesType}`}>
            {cards}
        </ul>
    )
}
