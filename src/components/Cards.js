import Card from './Card';
import Random from '../util/Random';
import ReactDOM from 'react-dom';

function Cards() {

  const cards = [];
  const rnd = Random.init(93);
  
  for (let x = 0; x < 20; ++x) {
    cards.push(<Card i={rnd()} />);
  }
  
  return (
    <div className="cards">
      {cards}
    </div>
  );
}

export default Cards;
