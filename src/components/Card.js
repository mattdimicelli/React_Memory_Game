export default function Card(props) {
        const { handleClick } = props;
        const {src, alt} = props.img;
        return (
            <div className='card' onClick={handleClick}>
                <img src={src} alt={alt} width='224' height='168' />
                <h2>{alt}</h2>
            </div>
        );
}