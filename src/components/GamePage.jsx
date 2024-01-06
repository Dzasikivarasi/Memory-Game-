import React from 'react';
import { gameSettings } from './GameSettings.jsx';
import Progress from './Progress.jsx';
import Grid from './Grid.jsx';
import Modal from './Modal.jsx';

export default function GamePage({ images = [], onShowResults, imagesType }) {
    const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    } = gameSettings(images);

    const handleResultClick = () => {
        onShowResults(stepsCount)
    }

    return (
        <section className="game container">
            <Progress value={finishedItems.length / 2} max={images.length / 2} />
            <div className="steps">Шаг {stepsCount}</div>
            < Grid
                images={images}
                finishedItems={finishedItems}
                checkItems={checkItems}
                imagesType={imagesType}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">Победа!</h3>
                    <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
                    <button className="button modal-button" type="button" onClick={handleResultClick}>Показать результаты</button>
                </Modal>
            )}
        </section>
    )
}
