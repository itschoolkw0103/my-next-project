import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <a href="/news">ニュース</a>
          </li>
          <li>
            <a href="/members">メンバー</a>
          </li>
          <li>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
