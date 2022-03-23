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
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img src="https://source.unsplash.com/random" alt="Auth" 
            className="h-screen w-full object-cover"/>
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`
          text-3xl font-bold mb-5
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

        {mode === 'login' ? (
          <p className="mt-8">
            <a onClick={() => setMode('signup')} className={`
              text-blue-500 hober:text-blue-700 font-semibold cursor-pointer
            `}>
              Don't have an account? Signup
            </a>
          </p>
        ): (
          <p className="mt-8">
            <a onClick={() => setMode('login')} className={`
              text-blue-500 hober:text-blue-700 font-semibold cursor-pointer
            `}>
              Already have an account? Login
            </a>
          </p>
        )}
      </div>
    </div>
  )
}