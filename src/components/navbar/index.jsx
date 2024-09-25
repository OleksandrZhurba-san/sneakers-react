import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  const { pathName } = useLocation();
  switch (pathName) {
    case "/":
      document.title = "home";
      break;
    case "/cart":
      document.title = "Cart";
      break;
    case "/contacts":
      document.title = "Cart";
      break;
    default:
      break;
  }

  return (
    <ul className={styles.navbar_container}>
      <li className={styles.li_style}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </li>
      <li className={styles.li_style}>
        <Link to="/cart" className={styles.link}>
          Shopping-Basket
        </Link>
      </li>
      <li className={styles.li_style}>
        <Link to="/contacts" className={styles.link}>
          Contacts
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
