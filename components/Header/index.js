import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export const navLinks = [
  { name: "Hjem", path: "/" },
  {
    name: "Oppgaver",
    path: "/tasks",
  },
];

export default function Header() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link href="/" passHref>
          <a>
            <Image src="/stacc_logo_white.png" width={150} height={50} />
          </a>
        </Link>
        <nav className={styles.navLinks}>
          {navLinks.map((link, index) => {
            return (
              <Link key={index} href={link.path} passHref>
                <a className={styles.link}>{link.name}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
