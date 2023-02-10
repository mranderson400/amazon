import React from "react";
import "./Header.css";
import {Link } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header ">
      <Link to="/ ">
      <img
        className="header_logo "
        src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
      />

      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text " />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option ">
          <span className="header_optionLineOne">Hello guest</span>
          <span className="header_optionLineTwo">Sign in </span>
        </div>

        <div className="header_option ">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo"> & Orders</span>
        </div>

        <div className="header_option ">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime </span>
        </div>
<Link to="/checkout">
        <div className="header_optionBasket">
      <ShoppingBasketIcon/>
      <span className="header_optionLineTwo
      header_BasketCount">0</span>
        </div>

</Link>

      </div>
    </div>
  );
}

export default Header;
