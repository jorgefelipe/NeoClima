import { createContext, useEffect, useState } from 'react';

import { ILogin, IRecoverPassword } from 'models/user';

import { login, logout, recoverPassword } from './functions';

export interface AuthState {
  userIsConnected: boolean;
}

export interface IAuth {
  state: AuthState;
  loading: boolean;
  login(values: ILogin): void;
  logout(): void;
  recoverPassword(values: IRecoverPassword): void;
}

const initialState: AuthState = {
  userIsConnected: false,
};

export const AuthContext = createContext<IAuth>({} as IAuth);

export const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AuthState>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const recoverData = JSON.parse(localStorage.getItem('@neoclima') as any);
    if (
      recoverData &&
      Object.prototype.toString.call(recoverData) === '[object Object]'
    ) {
      setState(recoverData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@neoclima', JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        state,
        loading,
        recoverPassword: (data) => recoverPassword({
          data,
          setLoading,
          state,
          setState,
        }),
        login: (data) => login({ data, setLoading, setState, state }),
        logout: () => logout({ setLoading, setState, state, data: undefined }),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
