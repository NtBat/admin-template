import route from 'next/router';
import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import Cookies from 'js-cookie';
import User from '../../model/User';

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function userNormalizer(userFirebase: firebase.User) : Promise<User> {
  const token = await userFirebase.getIdToken();

  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  }
}

function manageCookie(isLogged: boolean) {
  if(isLogged) {
    Cookies.set('admin-template-cod3r-auth', isLogged, { expires: 7 });
  } else {
    Cookies.remove('admin-template-cod3r-auth')
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function configSection(userFirebase) {
    if(userFirebase?.email) {
      const user = await userNormalizer(userFirebase);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    const res = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )

    configSection(res.user);
    route.push('/');    
  }

  useEffect(() => {
    const cancel = firebase.auth().onIdTokenChanged(configSection);
    return () => cancel();
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;