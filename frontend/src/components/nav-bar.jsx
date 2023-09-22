"use client";
import Link from "next/link";
import { Bell } from "lucide-react";
import { useUser, logout } from "@/store/user";
import './nav-bar.css'
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Nav = () => {
    const user = useUser();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
      dispatch(logout())

      router.push('/login')
    };

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
            <Link className="navlistText hoverText" href="/blog">
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
          {user.uid ? (
            <>
            <Link className="navtext hoverText" href="/">
              {user.uid}
            </Link>
            <Link className="navtext hoverText" href="/blog/myblogs">
             My blogs
            </Link>
            <button onClick={handleLogout} className="navbutton loginButton">Log out</button>
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
  
  