import Random from "../util/Random"
import "./grid.css"

function Grid() {

  const row = [];
  const rnd = Random.init(93);
  
  for (let c of "1234567") {
    
    const dur = 8+Math.
      floor(Math.random()*8);
    const h = 40+20*'01232321'[c*1];
    const col = [];
    
    for (let x of "0123") {
    
      const image = require(
        `../images/img${rnd()}.jpg`);
            
      let v = x.charCodeAt() - 97;
          v = (v/4 - 1) * dur;
    
      const call = (e) => {
        const img = require(
          `../images/img${rnd()}.jpg`
        );
        e.src = {img};
      }
    
      //alert(h);
      col.push(<img 
        className='row'
        src={image}
        style={{
          animationDuration: dur+'s',
          animationDelay: v+'s',
          animationName: 'slide'+h
        }}
        onanimationiteration='call(this)'
      />);
    }  
    row.push(
      <div 
        className='col'
        style={{height: h+'%'}}
      >
        {col}
      </div>
    );
  }

  return (
    <div className="banner-grid">
      {row}
    </div>
  );
}
      
export default Grid;
