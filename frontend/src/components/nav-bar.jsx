"use client";
import Link from "next/link";
import { Bell } from "lucide-react";
import { useUser, logout } from "@/store/user";
import './nav-bar.css'
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Nav = () => {
  const user = useUser();
  const dispatch = useDispatch();
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  }

  const handleLogout = () => {
    dispatch(logout());

    router.push("/login");
  };
  // Define a breakpoint for mobile views (e.g., 768px)
  const mobileBreakpoint = 768;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update the isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Initialize isMobile state based on the initial window width
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="main-nav">
      <Link href='/'>
        <h1 className="logo">Reflectify</h1>
      </Link>
      {isMobile ? (
        <>
          <div
            className="menu"
            onClick={() => {
              setMenu(!menu);
            }}
            style={{}}
          >
            Menu
          </div>
          <div className={`actual-menu ${menu ? "show" : "hide"} `}>
            <p
              onClick={() => {
                setMenu(!menu);
              }}
              className="close-menu"
            >
              X
            </p>

            <ul className="nav-menu">
              <li>
                <Link onClick={() => {
                  setMenu(!menu)
                }} className="" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => {
                  setMenu(!menu)
                }} className="" href="/blog">
                  Feed
                </Link>
              </li>

              <li>
                <Link onClick={() => {
                  setMenu(!menu)
                }} className="" href="/blog/create">
                  Create
                </Link>
              </li>
              {
                user.uid ? (
                  <>
                    <Link className="" href="/">
                      {user.uid}
                    </Link>
                    <Link onClick={() => {
                      setMenu(!menu)
                    }} className="" href="/blog/myblogs">
                      My blogs
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="navbutton loginButton"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <Link onClick={() => {
                    setMenu(!menu)
                  }} className="" href="/login">
                    Login
                  </Link>
                )
              }
            </ul>
          </div>
        </>
      ) : (
        <>
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
                Create
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
                <button
                  onClick={handleLogout}
                  className="navbutton loginButton"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link className="navtext loginButton" href="/login">
                Login
              </Link>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;

