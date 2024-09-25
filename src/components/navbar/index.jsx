import { NavLink, useLocation } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
          }
        >
          Home
        </NavLink>
      </li>
      <li className={styles.li_style}>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
          }
        >
          Shopping-Basket
        </NavLink>
      </li>
      <li className={styles.li_style}>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
          }
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
