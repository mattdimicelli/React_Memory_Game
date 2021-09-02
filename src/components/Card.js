export default function Card(props) {
        const {src, alt} = props.img;
        return (
            <div className='card'>
                <img src={src} alt={alt} width='224' height='168' />
                <h2>{alt}</h2>
            </div>
        );
}