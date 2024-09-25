import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "../cartItem";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const url = "https://66f3c87777b5e8897096ced1.mockapi.io/cartItem";

  useEffect(() => {
    getCartItems();
  }, []);

  async function getCartItems() {
    try {
      const response = await axios.get(url);
      setCartList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Shopping-cart</h1>
      {cartList.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <div>
          <div>
            {cartList.map((cartItem) => {
              return <CartItem key={cartItem.id} {...cartItem} />;
            })}
          </div>
          <div>
            <h1>Sum:</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
