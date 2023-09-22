"use client";
import Link from "next/link";
import { Bell } from "lucide-react";
import "./nav.css";
import { useUser } from "@/store/user";
import Card from "@/components/card";


export default function Home() {
  return (
    <main className={"main"}>
      <section className="hero-section">
        <Nav />
        <div className="landing-1">
          <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} />
          <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} /> <Card Title={"lorem ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"} />
          
        
        </div>
        <div className="anotherdiv">

        </div>
      </section>
    </main>
  );
}

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

