import React from 'react'
import './login.css'

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
            <input type="email" placeholder="Enter your student mail" className="input" />
          </div>
          <div className="inputdiv">
            <input type="password" placeholder="Password" className="input" />
          </div>
          
          <button className='button-submit'>Submit</button>
          

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
