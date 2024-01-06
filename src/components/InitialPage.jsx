import React from 'react';
import { GAME_TYPES } from '../settings';

export default function InitialPage({ onStartClick }) {
    const onInitialButtonClick = (type) => {
        onStartClick(type)
    }

    const initialButtons = GAME_TYPES.map(({ type, text }) => (
        <button className={`ico-button ico-button-${type}`}
            key={text}
            onClick={() => onInitialButtonClick(type)}
            type="button" >{text}</button>
    ))

    return (
        <section className="rules container">
            <h2>Добро пожаловать!</h2>
            <p>Memory — игра для тренировки визуальной памяти</p>
            <div className="rules-panel">
                <h3>Правила игры</h3>
                <ul className="rules-list">
                    <li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
                    <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
                    <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
                </ul>
            </div>
            {initialButtons}
        </section>
    )
}
