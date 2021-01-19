import {useContext} from 'react';

import { AuthContext, AuthProvider} from './provider';
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth};
