"use client";
import Link from "next/link";
import { Bell } from "lucide-react";
import { useUser } from "@/store/user";


const Nav = () => {
    const user = useUser();
    console.log(user);
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
          {user ? (
            <>
            <Link className="navtext hoverText" href="/">
              {user.uid}
            </Link>
            <Link className="navtext hoverText" href="/blog/myblogs">
             My blogs
            </Link>
            </>
          ) : (
            <Link className="navtext loginButton" href="/login">
              Login
            </Link>
          )}
        </div>
      </nav>
    );
  };

export default Nav;
  
  