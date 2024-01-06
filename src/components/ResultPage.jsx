import React from 'react';
import getDeclension from '@dubaua/get-declension';
import ResultsTable from './ResultsTable.jsx'

export default function ResultPage({ results = [], current, onSetNewGame }) {
  const handleNewGameClick = () => {
    onSetNewGame();
  }

  const stepsDeclension = getDeclension({
    count: current,
    one: 'шаг', few: 'шага', many: 'шагов'
  });

  return (
    <section className="result container">
      <h2>Лучшие результаты:</h2>
      <p>Вы завершили игру за <b>{stepsDeclension}</b>, так держать!</p>
      <ResultsTable results={results} current={current} />
      <p>Хотите попробовать ещё раз?</p>
      <button className="button result-button" type="button" onClick={handleNewGameClick}>Новая игра</button>
    </section>
  )
}
