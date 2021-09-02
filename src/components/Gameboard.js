import { useEffect, useState } from 'react';
import _ from 'lodash';
import Card from './Card';


export default function Gameboard(props) {

  const countryImages = [];
  const [random20CountriesImages, setRandom20CountriesImages] = useState([]);

  function randomizeCountrySelection() {
    setRandom20CountriesImages(_.sampleSize(countryImages, 20));
  }

  useEffect(()=> {
    (async function() {
      await cacheFlags();
      randomizeCountrySelection();
    })();

    async function cacheFlags() {
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


    const cardsList = random20CountriesImages.map(countryImg => <Card key={countryImg.alt} img={countryImg} />);

    return (
        <div className='gameboard'>
            {random20CountriesImages.length > 0 ? cardsList : 'Loading'}
        </div>
    );    
}