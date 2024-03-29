import React from 'react';

export default function Progress({ value, max }) {
    return (
        <>
            <div className="progress-wrapper">
                <div className="progress" style={{ width: `${value / max * 100}%` }}></div>
            </div>
            <p className="progress-description">Открыто <span>{value}</span> / <span>{max}</span></p>
        </>
    )
}
