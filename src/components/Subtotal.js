import React from "react";
import CurrencyFormat from "react-currency-format";
import "./styles/Subtotal.css";
import { useStateValue } from "./context/StateProvider";
import { getBasketTotal } from "./context/reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  // ****************proceed to buy on click**********
  const proceedToBuy = (e) => {
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={proceedToBuy}>Proceed to buy</button>
    </div>
  );
};

export default Subtotal;
