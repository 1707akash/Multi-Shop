

import './ShopBody.css'
import Camera from '../assets/camera.jpg'
import Lotion from '../assets/lotion.jpg'
import Girl from '../assets/girl.jpg'
import Boot from '../assets/leatherShoe.jpg'
import Dslr from '../assets/dslr.jpg'
import Drone from '../assets/drone.jpg'
import Tshirt from '../assets/tSHirt.jpg'
import Lamp from '../assets/lamp.jpg'
import SportShoe from '../assets/sportShoe.jpg'
import Watch from '../assets/watch.jpg'
import Tops from '../assets/tops.jpg'
import GirlPair from '../assets/girlPair.jpg'
import WomanPair from '../assets/womanPair.jpg'
import OfferCards from './OfferCards'
import Atomized from '../assets/atomized.jpg'
import BluePhlare from '../assets/bluePhlare.jpg'
import Fuzion from '../assets/fuzion.jpg'
import TechCom from '../assets/techCom.jpg'
import WorkApply from '../assets/workApply.jpg'
import IntHearts from '../assets/intHearts.jpg'


const categoryData = [
    {imgUrl:Girl,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Lotion,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Camera,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Boot,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Boot,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Camera,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Lotion,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Girl,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Lotion,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Camera,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Girl,catName: 'Category Name', count:'100 Products'},
    {imgUrl:Boot,catName: 'Category Name', count:'100 Products'},
]

const featuredData = [
    {imgSrc:Dslr},
    {imgSrc:Tshirt},
    {imgSrc:Lamp},
    {imgSrc:SportShoe},
    {imgSrc:Drone},
    {imgSrc:Watch},
    {imgSrc:Tops},
    {imgSrc:Lotion},
]

const companyData = [
    {imgSrc:Atomized},
    {imgSrc:BluePhlare},
    {imgSrc:Fuzion},
    {imgSrc:TechCom},
    {imgSrc:WorkApply},
    {imgSrc:IntHearts},
]


const ShopBody = () => {
  return (
    <div className='shopBody'>
    <h1>CATEGORIES</h1>
    <div className="categoryDiv">
    {
            categoryData.map((elem)=>(
                <div className="prodCart">
                    <div className="imgDIv">
                    <img className='xyz' src={elem.imgUrl} alt="" />
                    </div>
                    <div className="prodInner">
                    <h4>{elem.catName}</h4>
                    <span>{elem.count}</span>
                    </div>
                </div>
            ))
        }
    </div>


    <h1>FEATURED PRODUCTS</h1>
    <div className="featuredProducts">
        {
            featuredData.map((elem)=>(
                <div className="featureCard">
                    <div className="fImg">
                    <img src={elem.imgSrc} alt="" />
                    </div>
                    <div className="fDetails">
                    <p>Product Name Goes Here</p>
                    <div><span>$123.00 </span><span className="crossed">$150.00</span></div>
                    <span>⭐⭐⭐⭐⭐(99)</span>
                    </div>
                </div>
            ))
        }
    </div>

    <div className="midCards">
    <OfferCards imgSrc={WomanPair} height={'225px'} width={'668px'} />
    <OfferCards imgSrc={GirlPair} height={'225px'} width={'668px'} />
    </div>


    <h1>RECENT PRODUCTS</h1>
    <div className="featuredProducts">
        {
            featuredData.map((elem)=>(
                <div className="featureCard">
                    <div className="fImg">
                    <img src={elem.imgSrc} alt="" />
                    </div>
                    <div className="fDetails">
                    <p>Product Name Goes Here</p>
                    <div><span>$123.00 </span><span className="crossed">$150.00</span></div>
                    <span>⭐⭐⭐⭐⭐(99)</span>
                    </div>
                </div>
            ))
        }
    </div>

    <div className="companies">
        {
            companyData.map((elem)=>(
                <div className='comp'>
                <img src={elem.imgSrc} alt="" />
            </div>
            ))
        }
    </div>




    </div>
  )
}

export default ShopBody