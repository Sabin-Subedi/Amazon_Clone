import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "../StateProvider";

function Subtotal({ value }) {
  const [{ basket }, dispatch] = useStatevalue();
  const [total, setTotal] = useState();

  useEffect(() => {
    const price = basket.map((item) => item.price);

    const totals = price.reduce((a, b) => {
      return a + b;
    }, 0);
    console.log(totals);
    setTotal(totals);
  }, []);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        decimalScale={2}
        value={total}
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
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
