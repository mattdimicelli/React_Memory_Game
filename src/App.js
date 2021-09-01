import { useEffect } from 'react';
import Image from './components/Image';

//header with title, instructions, score, and best score
//20 tiles
//Country flag and country name
//Can be any twenty countries in the world
//randomize order with every click on a tiles
//also run that function when the component mounts
// 224 / 168

function App() {

  let countryImageUrls = [];

  async function cacheImages(srcUrlArray) {
    const promises = await srcUrlArray.map(url => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = url;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
  }

  function randomizeCountrySelection() {

  }

  useEffect(()=> {
    async function loadFlags() {
      const response = await fetch('https://flagcdn.com/en/codes.json');
      const codes = await response.json();
      const justCountries = Object.entries(codes).filter(country => {
        const [countryCode] = country;
        return countryCode.length === 2 || (countryCode.startsWith('gb') && 
        countryCode.length === 6) ? true : false;
      });
      for (const country of justCountries) {
        const [countryCode, countryName] = country;
        // countryImages[countryName] = <Image countryCode={countryCode} countryName={countryName} />
        const url = `https://flagcdn.com/224x168/${countryCode}.png`;
        countryImageUrls.push(url);
      }
      await cacheImages(countryImageUrls);
      
    }
    
    loadFlags();
  }, []);
  

  return (
    <div className="App">
    </div>
  );
}



export default App;
