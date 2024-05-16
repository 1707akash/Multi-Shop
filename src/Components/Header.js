import React from 'react'
import './Header.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className='header'>
    <div className="headerGrey">
        <div className="greyLeft">
        <span>About</span>
        <span>Contact</span>
        <span>Help</span>
        <span>FAQs</span>
        </div>

        <div className="greyRight">
        <button className='greyBtn' ><span>My Account</span> <span><ArrowDropDownIcon style={{fontSize:'16px'}} /></span></button>
        <button><span>USD</span> <span><ArrowDropDownIcon style={{fontSize:'16px'}} /></span></button>
        <button><span>EN</span> <span><ArrowDropDownIcon style={{fontSize:'16px'}} /></span></button>
        </div>
    </div>


    <div className="logoDiv">
    <div className="logo">
    <div className="logoOne">
        <span>MULTI</span>
    </div>
    <div className="logoTwo">
        <span>SHOP</span>
    </div>
    </div>

    <div className="search">
    <input type="text" placeholder='Search for products' />
    <span><SearchIcon style={{color:'#ffd333', fontSize:'1.65rem'}} /></span>
    </div>

    <div className="service">
    <p style={{color:'#3d464d',margin:'5px'}}>Customer Service</p>
    <p style={{fontWeight:'600', fontSize:'1.2rem', margin:'0',color:'#3d464d'}} >+012 345 6789</p>
    </div>
    </div>


    <div className="menuBar">
      <div className="barLeft">
      <div className="categories">
      <div className="burger">
      <span ><MenuIcon style={{fontSize:'19px', paddingRight:'6px'}}/></span>
      <span  style={{fontSize:'1.3rem', fontWeight:'500'}}>Categories</span>
      </div>
      <span className="arrow"><KeyboardArrowDownIcon /></span>
      </div>
      <div className="menus">
        <span>Home</span>
        <span>Shop</span>
        <span>Shop Details</span>
        <span>Pages <span><KeyboardArrowDownIcon style={{fontSize:'16px'}} /></span></span>
        <span>Contact</span>
      </div>
      
      </div>

      <div className="barRight">
      <FavoriteIcon style={{color:'#ffd333', fontSize:'20px'}} /> <span>0</span> <ShoppingCartIcon style={{color:'#ffd333', fontSize:'20px'}} /> <span>0</span>
      </div>
    </div>
         
    </div>
  )
}

export default Header