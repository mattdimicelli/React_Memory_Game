export default function Image(props) {
    const {countryCode, countryName} = props;
    return (
        <img 
        src={`https://flagcdn.com/224x168/${countryCode}.png`}
        alt={countryName}
        width="224"    
        height="168">
        </img>
    );
}