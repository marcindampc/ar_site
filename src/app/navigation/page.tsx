import styles from "./navigation.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <img src="./ar_logo_color_nobg.svg"></img>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/blog" className={styles.item}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/poradniki" className={styles.item}>
            Poradniki
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.item}>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
}
