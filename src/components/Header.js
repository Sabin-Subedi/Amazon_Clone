import React from "react";
import "./Header.css";
import { useStatevalue } from "../StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket }, dispatch] = useStatevalue();

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>SignIn</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Retirns</span>
          <span className='header__optionLineTwo'>Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </div>
      <Link to='/checkout'>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo header__basketCount'>
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
