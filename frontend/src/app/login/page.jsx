import React from "react";
import "./login.css";

const page = () => {
  return (
    <>
      <section className="main">
        <div className="main-container">

          <h1 className="intro-text">Hello 👋</h1>
          <p className="textcontent">
            Sign in to your account
          </p>
          <div className="inputdiv">
            <input type="email" placeholder="Email or Username" className="input" />
          </div>
          <div className="inputdiv">
            <input type="password" placeholder="Password" className="input" />
          </div>
          <div>
            <button className="buttons">Continue</button>
          </div>
          <p>OR</p>
          <div>
            <button className="buttons">Continue with Facebook</button>
          </div>
          <div>
            <button className="buttons">Continue with Google</button>
          </div>

          <div className="inputradio">
            <input type="checkbox" name="" id="" />
            <span> Stay signed in</span>
          </div>

        </div>
      </section>
    </>
  );
};

export default page;
