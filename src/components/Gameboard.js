import { useEffect, useState } from 'react';
import _ from 'lodash';
import Card from './Card';


export default function Gameboard(props) {

  const { resetCurrentScoreAndTallyBestScore, increaseCurrentScore } = props;
  const [countryImages, setCountryImages] = useState([]);
  const [random20CountriesImages, setRandom20CountriesImages] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  function randomizeCountrySelection() {
    setRandom20CountriesImages(_.sampleSize(countryImages, 20));
  }

  function handleClick(e) {
    randomizeCountrySelection();
    cardList = random20CountriesImages.map(countryImg => {
        return <Card key={countryImg.alt} img={countryImg} handleClick={handleClick} />
        });
    const clickedCard = e.currentTarget.firstElementChild.alt;
    if (clickedCards.includes(clickedCard)) {
        resetCurrentScoreAndTallyBestScore();
        setClickedCards([]);
    } else {
        increaseCurrentScore()
        setClickedCards(clickedCards.push(clickedCard));
    }
    
  }

  useEffect(() => randomizeCountrySelection(), [countryImages]);
  useEffect(() => console.log(clickedCards), [clickedCards]);
//   useEffect(() => {
//     if
//   }, [clickedCards]);


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