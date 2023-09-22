'use client'
import React, { useRef, useEffect, useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { login, useUser } from '@/store/user';
import { useRouter } from 'next/navigation';

const page = () => {
  const [newlySubmitted, setNewlySubmitted] = useState(false);
  const user = useUser();
  const dispatch = useDispatch();
  const router = useRouter();
  const uidRef = useRef()
  const passwordRef = useRef()
  
  useEffect(() => {
    if (user?.uid && !user.error && newlySubmitted) router.push('/')
  }, [user, newlySubmitted])

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login({
      uid: uidRef.current.value,
      password: passwordRef.current.value,
    }))

    setNewlySubmitted(true)
  }

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <div className="main-container">

          <h1 className="intro-text">Hello 👋</h1>
          <p className="textcontent">
            Sign in to your account
          </p>
          <div className="inputdiv">
            <input type="text" placeholder="UID" className="input" ref={uidRef} defaultValue={'21BCS1353'}/>
          </div>
          <div className="inputdiv">
            <input type="password" placeholder="Password. (Hint - xyz)" className="input" ref={passwordRef} defaultValue={'xyz'}/>
          </div>
          <div>
            {user.error == 'PASSWORD_MISMATCH' &&
              <span> Password Mismatch </span>
            }
            {user.error == 'INVALID_UID' &&
              <span> UID not vaild! </span>
            }
            <button className="button-submit">Continue</button>
          </div>

          <div className="inputradio">
            <input type="checkbox" name="" id="" />
            <span> Stay signed in</span>
          </div>

        </div>
      </form>
    </>
  );
};

export default page;
