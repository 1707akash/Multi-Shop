import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css'
import WomanShop from '../assets/womanShop.jpg'
import MenShop from '../assets/menShop.jpg'
import ChildShop from '../assets/ChildShop.jpg'
import OfferCards from "./OfferCards";
import WomanPair from '../assets/womanPair.jpg'
import GirlPair from '../assets/girlPair.jpg'
import DoneIcon from '@mui/icons-material/Done';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const iconData = [
  { iconUrl: <DoneIcon style={{color:'#ffd333', fontSize:'2.5rem'}} />, textTag: "Quality Product" },
  { iconUrl: <LocalShippingIcon style={{color:'#ffd333', fontSize:'2.5rem'}} />, textTag: "Free Shipping" },
  { iconUrl: <SyncAltIcon style={{color:'#ffd333', fontSize:'2.5rem'}} />, textTag: "14-day Return" },
  { iconUrl: <WifiCalling3Icon style={{color:'#ffd333', fontSize:'2.5rem'}} />, textTag: "24/7 Support" },
];


const fashionData = [
    {
        imgUrl: WomanShop,
        heading:'Woman Fashion'
},
{
    imgUrl: MenShop,
    heading:'Men Fashion'
},
{
    imgUrl: ChildShop,
    heading:'Kids Fashion'
},
]

const Hero = () => {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
   

  return (
    <div className='hero'>
        <div className="carouselDiv">
        <div className="leftDiv">
        <Slider {...settings}>
        {
            fashionData.map((elem, index)=>(
                <div className="sliderBox">
            <img src={elem.imgUrl} alt="fashion" />
            <div className="texts">
                <h1>{elem.heading}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis .</p>
                <button>Show More</button>
            </div>
        </div>
            ))
        }
        
        
      </Slider>
        </div>
        <div className="rightDiv">
        <OfferCards imgSrc={WomanPair} height={'205px'} />
        <OfferCards imgSrc={GirlPair} height={'205px'} />
        </div>

        </div>

        <div className="iconDiv">
        {
            iconData.map((elem)=>(
                <div className="icons">
                    <span>{elem.iconUrl}</span>
                    <span style={{fontSize:'1.25rem', fontWeight:'600', paddingLeft:'8px'}}>{elem.textTag}</span>
                </div>
            ))
        }
        </div>

        
    </div>
  )
}

export default Hero