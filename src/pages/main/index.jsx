import CartList from "../../components/cartList";
import banner from "../../assets/images/Banner.png";
import btnAddToCart from "../../assets/icons/btnaddToCart.svg";

function Main() {
  const stylesData = {
    container: {
      display: "flex",
      gap: "45px",
    },
    item: {
      maxWidth: "350px",
    },
  };
  return (
    <div>
      <img src={banner} width="100%" alt="banner" />
      <CartList
        path="productData"
        icon={btnAddToCart}
        stylesData={stylesData}
        title="Items"
      />
    </div>
  );
}
export default Main;
