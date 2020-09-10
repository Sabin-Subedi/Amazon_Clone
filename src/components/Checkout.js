import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStatevalue } from "../StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStatevalue();
  console.log(basket);

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ads'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div className='checkout__leftcart'>
          <h3>Hello,{user ? user.email : "Guest"}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          <FlipMove>
            {basket.map((item) => (
              <li className='liststyle'>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </li>
            ))}
          </FlipMove>
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
