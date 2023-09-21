import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Bell } from "lucide-react";
import "./nav.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className="main-nav">
        <h1>YourBlog</h1>
        <ul className="nav-list">
          <li>
            <Link className="navlistText" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlistText" href="/">
              Feed
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link className="navlistText navButton" href="/blog">
              Create +
            </Link>
          </li>
        </ul>
        <div className="nav-login">
          <Bell />
          <Link className="navtext loginButton" href="/">
            Login
          </Link>
          <Link className="navtext" href="/">
            Register
          </Link>
        </div>
      </nav>
    </main>
  );
}
