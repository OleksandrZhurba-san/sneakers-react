import Navbar from "../navbar";
import styles from "./styles.module.css";
function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <h1>Sneakers - shop</h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
