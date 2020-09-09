import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ads'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div className='checkout__leftcart'>
          <h2 className='checkout__title'>Shopping Basket</h2>
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
        {/* basketItem */}
      </div>
    </div>
  );
}

export default Checkout;
