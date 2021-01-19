import { useEffect } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import Env from 'environments';
import firebase from 'firebase';

import { theme } from 'styles/theme';

import Routes from './routes';

function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(Env);
    }
  });
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
