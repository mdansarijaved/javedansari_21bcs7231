'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Bell } from "lucide-react";
import "./nav.css";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main className={styles.main} >
      <nav className="main-nav">
        <h1 className="logo">Reflectify</h1>
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
      <section className="hero-section">
        <TypeAnimation
          sequence={[
            2000,
            'Your story matters.', // Types 'One'
            2000, // Waits 1s
            'Let the world know it.', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Tell your story to the world.',
            2000, // Types 'Three' without deleting 'Two'
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text"
        />
        <p className="text-para">Explore Limitless Horizons: Unearth, Share, and Discover Stories Beyond Imagination on Our Blogging Odyssey</p>

        <Image src={"/images/16.svg"} width={900} height={600} className="peepsvg" alt="rotating svg" priority />

        <div className="anotherdiv">

        </div>
      </section>
    </main>
  );
}
