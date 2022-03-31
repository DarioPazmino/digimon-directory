import './card.styles.css';

const Card = ({ digimon: {name, level, img} }) => (
  <div className='card-container' key={name}>
    <img 
      alt={`'${name}`} 
      src={img}
    />
    <h2>{name}</h2>
    <p>{level}</p>
  </div>
)

export default Card;