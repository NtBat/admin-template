import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

import {GoogleIcon} from '../components/icons';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    if(mode === 'login' ) {
      console.log('login')
    } else {
      console.log('signup')
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
    <div className="w-1/2">
      <h1 className={`
        text-xl font-bold mb-5
      `}>
        {mode === 'login' ? 'Login' : 'Signup'}
      </h1>
      <AuthInput 
        label="Email"
        type="email"
        value={email}
        changeValue={setEmail}
        required
      />
      <AuthInput 
        label="Password"
        type="password"
        value={password}
        changeValue={setPassword}
        required
      />

      <button onClick={submit} className={`
        w-full bg-indigo-500 hover:bg-indigo-400
        text-white rounded-lg px-4 py-3 mt-6
      `}>
        {mode === 'login' ? 'Login' : 'Signup'}
      </button>

      <hr className="my-6 border-gray-300 w-full" />

      <button onClick={submit} className={`
        w-full bg-red-500 hover:bg-red-400
        text-white rounded-lg px-4 py-3 
        flex items center justify-center gap-1
      `}>
        {GoogleIcon}
        Login with google
      </button>
    </div>
    </div>
  )
}