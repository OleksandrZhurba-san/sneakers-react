import { useEffect, useState } from "react";
import CartItem from "../cartItem";
import { getCartItems } from "../../helpers";

function CartList({ path, icon, title, stylesData }) {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartItems(path, setCartList);
  }, []);

  return (
    <div style={stylesData}>
      <h1>{title}</h1>
      {cartList.length === 0 ? (
        <h3>
          {title === "Shopping-Cart"
            ? "Your Shopping-Cart is empty"
            : "Sold Out"}
        </h3>
      ) : (
        <div>
          <div>
            {cartList.map((cartItem) => {
              return <CartItem key={cartItem.id} {...cartItem} icon={icon} />;
            })}
          </div>
          {title === "Basket" && (
            <div>
              <h1>Sum:</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartList;
