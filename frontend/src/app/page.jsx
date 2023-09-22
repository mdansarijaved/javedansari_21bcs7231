"use client";
import Image from "next/image";

import Link from "next/link";
import { Bell } from "lucide-react";
import "./nav.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className={'main'}>
      <section className="hero-section">
      <Nav />
        <div className="landing-1">
        <Card />
        </div>
        <div className="anotherdiv"></div>
      </section>
    </main>
  );
}

const Nav = () => {
  return (
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
          <Link
            className="navlistText navButton no-underline-hover"
            href="/blog/create"
          >
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
  );
};


const Card = () => {
  return (
    <div className="card">
      <h1 className="card-tittle">Tittle</h1>
      <div className="card-content">
        <p></p>
      </div>
    </div>
  )
}