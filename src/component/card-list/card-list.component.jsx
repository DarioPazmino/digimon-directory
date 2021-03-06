import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({ digimons }) => (
  <div className="card-list">
    {digimons.map(digimon => (
      <Card
        digimon={digimon}
        key={digimon.name}
      />
    ))}
  </div>
)

export default CardList;