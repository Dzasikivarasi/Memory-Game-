import React from 'react';
import { AppRoute } from './settings.js';
import InitialPage from './components/InitialPage.jsx';
import GamePage from './components/GamePage.jsx';
import ResultPage from './components/ResultPage.jsx';

export default function App({ getImages, results = [] }) {
  const [page, setPage] = React.useState(AppRoute.Initial);
  const [result, setResult] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [imagesType, setImagesType] = React.useState(0);

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  }

  const setNewGame = () => {
    setPage(AppRoute.Initial)
  }

  const handleStart = (type) => {
    setImages(getImages(type));
    setImagesType(type);
    setPage(AppRoute.Game);
  }

  const renderPage = (route) => {
    switch (route) {
      case AppRoute.Initial:
        return <InitialPage onStartClick={handleStart} />

      case AppRoute.Game:
        return <GamePage images={images} onShowResults={showResults} imagesType={imagesType} />

      case AppRoute.Results:
        return <ResultPage results={results} current={result} onSetNewGame={setNewGame} />

      default:
        return null;
    }
  }
  return renderPage(page);
}
