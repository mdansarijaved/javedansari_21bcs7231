import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Bell } from "lucide-react";
import "./nav.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className="main-nav">
        <h1 className="logo">YourBlog</h1>
        <ul className="nav-list">
          <li>
            <Link className="navlistText hoverText" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlistText hoverText" href="/">
              Feed
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link className="navlistText navButton no-underline-hover" href="/blog/create">
              Create +
            </Link>
          </li>
        </ul>
        <div className="nav-login">
          <Bell />
          <Link className="navtext loginButton" href="/login">
            Login
          </Link>
          <Link className="navtext hoverText" href="/blog/myblogs">
            My blogs
          </Link>
        </div>
      </nav>
    </main>
  );
}
