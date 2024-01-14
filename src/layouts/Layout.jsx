// library
import { FaGithub } from "react-icons/fa";

// style
import styles from "./Layout.module.css";
import ShowTime from "../utils/ShowTime";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Salar Crypto</h1>
        <p>
          <a href="https://github.com/Fazelsalari6o8" target="_blank">
            <span>Developer6o8</span>
            <FaGithub />
          </a>{" "}
          | Learning React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed with ❤️ by ✌🏻Developer6o8✌🏻</p>
        <ShowTime />
      </footer>
    </>
  );
}

export default Layout;
