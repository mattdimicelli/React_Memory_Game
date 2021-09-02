import { useEffect, useState } from 'react';
import _ from 'lodash';
import Card from './Card';


export default function Gameboard(props) {

  const { resetCurrentScoreAndTallyBestScore, increaseCurrentScore,
        showGameOver, hideGameOver } = props;
  const [countryImages, setCountryImages] = useState([]);
  const [random20CountriesImages, setRandom20CountriesImages] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  function randomlySelect20CardsForNewRound() {
    setRandom20CountriesImages(_.sampleSize(countryImages, 20));
  }

  function shuffleCards() {
      setRandom20CountriesImages(_.shuffle(random20CountriesImages));
  }

  function handleClick(e) {
    const clickedCard = e.currentTarget.firstElementChild.alt;
    if (clickedCards.includes(clickedCard)) {
        resetCurrentScoreAndTallyBestScore();
        setClickedCards([]);
        randomlySelect20CardsForNewRound();
        showGameOver();
    } else {
        increaseCurrentScore();
        const newClickedCards = [...clickedCards];
        newClickedCards.push(clickedCard);
        setClickedCards(newClickedCards);
        shuffleCards();
        hideGameOver();
    }
    
  }

  useEffect(() => randomlySelect20CardsForNewRound(), [countryImages]);

  useEffect(()=> {
    cacheFlags();

    async function cacheFlags() {
      const response = await fetch('https://flagcdn.com/en/codes.json');
      const codes = await response.json();
      const justCountriesNotStates = Object.entries(codes).filter(country => {
        const [countryCode] = country;
        return countryCode.length === 2 || (countryCode.startsWith('gb') && 
        countryCode.length === 6) ? true : false;
      });
      const countryImageArr = justCountriesNotStates.map(country => {
        const [countryCode, countryName] = country;
        const url = `https://flagcdn.com/224x168/${countryCode}.png`;
        const img = new Image();
        img.src = url;
        img.alt = countryName;
        return img;
      });
      setCountryImages(countryImageArr);
    }

  }, []);

  let cardList = random20CountriesImages.map(countryImg => {
    return <Card key={countryImg.alt} img={countryImg} handleClick={handleClick} />
    });

    return (
        <div className='gameboard'>
            {random20CountriesImages.length > 0 ?
            cardList
            : 'Loading'}
        </div>
    );    
}