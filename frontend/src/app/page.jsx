import Card from "@/components/card";
import Nav from "@/components/nav-bar";
import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={"main"}>
      <section className="hero-section">
        <Nav />
        <div className="landing-1">
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />{" "}
          <Card
            Title={"lorem ipsum"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at odio ipsum placeat quidem aliquam voluptatum quaerat et iure culpa dolorem optio cum, incidunt sequi corrupti cumque? Error, optio numquam!"
            }
          />
        </div>
        <div className="anotherdiv">
          <div className="svg-container">
            <div className="text-svg-container">
            <h3 className="">Let the world know your story.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum cupiditate eveniet nam esse autem, aliquam suscipit</p>
            </div>
          <Image src={'/images/16.svg'} width={200} height={200} alt="svg" className="rotate-svg" />
          </div>
        </div>
      </section>
    </main>
  );
}
