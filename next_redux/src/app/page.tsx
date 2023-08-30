"use client";
import styles from './page.module.css'
import {  useState } from 'react'
import { logIn , logOut } from '@/redux/authSlice/authSlice';
import { TypedUseSelectorHook, useDispatch,useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

export default function Home() {
  const   [username,setuserName] = useState('');
  const dispatch  = useDispatch<AppDispatch>();
  const state = useSelector((state: any) => state.authReducer.value);

  const handleSubmit =  (event : any) => {
      event.preventDefault();
      dispatch(logIn(username));

  }
  const handleLogOut = () => {
    dispatch(logOut());
  }
  return (
    <main className={styles.main}>
        {state.username !== ""  ? (<h1>username: {state.username} logged in</h1>) : ""}
        <form onSubmit={handleSubmit}>
          <div className="">
            <input type='text' placeholder='enter an username' value={username} onChange={e => setuserName(e.target.value)}  />
          </div>
          <button >Log In </button>
        </form>
          <button onClick={handleLogOut}>LogOut</button>
          <button>Moderator</button>
          {state.isModerator ? (<h1>you are a moderator</h1>): ""}
    </main>
  )
}
