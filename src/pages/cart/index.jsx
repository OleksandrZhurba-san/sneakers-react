import CartList from "../../components/cartList";
import styles from "./styles.module.css";
import removeIcon from "../../assets/icons/basket.svg";

export default function Cart() {
  const stylesData = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "45px",
    },
  };
  return (
    <div className={styles.cart_container}>
      <CartList
        path="cartItem"
        icon={removeIcon}
        title="Shopping-Cart"
        stylesData={stylesData}
      />
    </div>
  );
}
