
import './Item.css'

const Item=({name , price , details , })=>{
    return  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{name}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{details}</p>
    </div>
  </div>
}
export default Item 