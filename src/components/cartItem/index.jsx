import styles from "./styles.module.css";
function CartItem({ name, price, image, icon, stylesData }) {
  return (
    <div className={styles.cart_container}>
      <img src={image} alt="sneaker image"></img>
      <h3>{name}</h3>
      <p>Name</p>
      <p>{price}</p>
      <img src={icon} alt="basket" />
    </div>
  );
}

export default CartItem;
