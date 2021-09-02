import { useEffect, useState } from 'react';
import _ from 'lodash';
import Card from './Card';


export default function Gameboard(props) {
    const { setCurrentScore, setBestScore } = props;

  const countryImages = [];
  const [random20CountriesImages, setRandom20CountriesImages] = useState([]);

  function randomizeCountrySelection() {
    setRandom20CountriesImages(_.sampleSize(countryImages, 20));
  }

  function handleClick(e) {
    console.log(countryImages);
    randomizeCountrySelection();
  }

  useEffect(() => console.log(random20CountriesImages), [random20CountriesImages]);


  useEffect(()=> {
    (async function() {
      await cacheFlags();
      randomizeCountrySelection();
    })();

    async function cacheFlags() {
    console.log('fire');
      const response = await fetch('https://flagcdn.com/en/codes.json');
      const codes = await response.json();
      const justCountriesNotStates = Object.entries(codes).filter(country => {
        const [countryCode] = country;
        return countryCode.length === 2 || (countryCode.startsWith('gb') && 
        countryCode.length === 6) ? true : false;
      });
      for (const country of justCountriesNotStates) {
        const [countryCode, countryName] = country;
        const url = `https://flagcdn.com/224x168/${countryCode}.png`;
        const img = new Image();
        img.src = url;
        img.alt = countryName;
        countryImages.push(img);
      }
    }
  }, []);


    

    return (
        <div className='gameboard'>
            {random20CountriesImages.length > 0 ?
            (random20CountriesImages.map(countryImg => {
            return <Card key={countryImg.alt} img={countryImg} handleClick={handleClick} />
            }))
            : 'Loading'}
        </div>
    );    
}