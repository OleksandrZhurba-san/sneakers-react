import Navbar from "../navbar";
import styles from "./styles.module.css";
function Header() {
  return (
    <header className={styles.header_container}>
      <h1>Sneakers - shop</h1>
      <Navbar />
    </header>
  );
}

export default Header;
