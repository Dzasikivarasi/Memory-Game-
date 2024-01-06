import React from 'react';

export const gameSettings = (images) => {
    const [stepsCount, setStepsCount] = React.useState(0);
    const [finishedItems, setFinishedItems] = React.useState([]);
    const isWin = finishedItems.length === images.length;

    const checkItems = (firstItem, secondItem) => {
        const firstImage = images.find(({ id }) => id === firstItem);
        const secondImage = images.find(({ id }) => id === secondItem);
        if (firstImage.url === secondImage.url) {
            setFinishedItems((items) => [...items, firstItem, secondItem]);
        }

        setStepsCount((i) => i + 1);
    }

    return {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    };
}
