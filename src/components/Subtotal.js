import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal({ value }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStatevalue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains gift
            </small>
          </>
        )}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Subtotal;
