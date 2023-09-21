import React from 'react'
import './login.css'

const page = () => {
  return (
    <>
    <section>
      <div>
        <h1>Hello</h1>
        <p>Sign in to <a href ="#">My Blog</a> or <a href="#">Create an account</a></p>
        <input type="email" placeholder='Email or Username'/>
        <br />
        <input type="password" placeholder='Password' />
        <div>
        <button>Continue</button>
        </div>
        <div>
          <button>Continue with Facebook</button>
        </div>
        <div>
          <button>Continue with Google</button>
        </div>
        <div>
          <button>Contiue with Apple</button>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
        <span> Stay signed in</span>
        </div>
        </div>
    </section>
    </>
  )
}

export default page
