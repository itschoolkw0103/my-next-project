import styles from "./index.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.items}>
            <Link href="/news">ニュース</Link>
          </li>
          <li className={styles.items}>
            <Link href="/members">メンバー</Link>
          </li>
          <li className={styles.items}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© SIMPLE. All Right Reserved 2024</p>
    </footer>
  );
}
