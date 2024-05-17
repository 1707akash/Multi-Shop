

import './OfferCards.css'

const OfferCards = (props) => {
  return (
    <div className='offerCards' style={{height:props.height , width:props.width}}>
        <img src={props.imgSrc} alt="" />
        <div className='offerTop'>
        <h4>SAVE 20%</h4>
        <h3>Special Offer</h3>
        <button>Shop Now</button>
        </div>
    </div>
  )
}

export default OfferCards