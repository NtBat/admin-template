import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Auth</h1>
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
    </div>
  )
}