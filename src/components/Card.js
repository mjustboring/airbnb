import './card.css';
import star from '../images/star.svg';

function Card({i}) {

  let v;
  
  // preparing some stub data
  
  const img = require(`../images/img${i}.jpg`);
  
  v = Math.floor(Math.random() * 2.99);
  const st = ['SOLD OUT','ONLINE','N/A'][v];

  const s = `postulant brute ea accommodare augue noster omittantur dui putent curae sit error scelerisque commodo offendit ultrices sale ridiculus discere convenire brute option cursus quod integer vivendo veniam nam scripserit no`;

  v = Math.floor(Math.random() * (s.length-40));
  
  const des = s.slice(v, v+40);
  
  const pr = Math.floor(Math.random() * 1000);
  
  v = Math.floor(Math.random() * 10);
  const rat1 = `4.${v}`;
  
  v = Math.floor(Math.random() * 100);
  const rat2 = v;
  const rat3 = ['USA','INDIA','CANADA'][Math.floor(v/34)];
  
  // return the card component
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
        {
          (st != 'N/A') && 
          (<div className='card-status'>{st}</div>)
        }
      </div>
      <div class="card-rating">
        <img src={star} alt=""/> 
        <b>{rat1}</b>&nbsp;({rat2}) • {rat3}
      </div>
      <div class="card-description">
        {des}
      </div>
      <div class="card-price">
        <b>From ${pr}</b>&nbsp;/ person
      </div>
    </div>
  );
}

export default Card;
