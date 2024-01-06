import React from 'react';

export default function ResultsTable({ results = [], current }) {
    const sortedResults = [...results, { name: "Ваш результат", stepsCount: current }
    ].sort((a, b) => a.stepsCount - b.stepsCount);

    const resultRows = sortedResults.map(({ name, stepsCount }, index) => (
        <tr key={name} className={`result-table-row ${name === "Ваш результат" ? 'active' : ''}`}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{stepsCount}</td>
        </tr>
    ))
    return (
        <table className="result-table">
            <thead>
                <tr className="result-table-row">
                    <th>Место</th>
                    <th>Имя</th>
                    <th>Шаги</th>
                </tr>
            </thead>
            <tbody>
                {resultRows}
            </tbody>
        </table>
    )
}
