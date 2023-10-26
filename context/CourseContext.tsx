import React, { createContext, useReducer } from 'react';
import { CourseState, authReducer } from './CourseReducer';

interface ProviderProps {
  children: React.ReactNode;
}

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Object | null;
  status: 'verifying' | 'authenticated' | 'notAuth';
  terms: boolean;
  signUp: () => void;
  signIn: () => void;
  logOut: () => void;
  removeError: () => void;
  changeTerms: (opt: boolean) => void;
};

const authInitialState: CourseState = {
  status: 'verifying',
  token: null,
  user: null,
  errorMessage: '',
  terms: false
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signUp = () => {};
  const signIn = () => {};
  const logOut = () => {};
  const removeError = () => {};
  const changeTerms = (opt: boolean) => {
    dispatch({
      type: "setTerms",
      payload: opt,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
        changeTerms
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
