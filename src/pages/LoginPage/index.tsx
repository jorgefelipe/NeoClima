import React from 'react';

import {Flex} from '@chakra-ui/react';

import LoginForm from 'pages/LoginPage/LoginForm/index';
import LoginLogo from 'pages/LoginPage/LoginLogo/index';
const LoginPage: React.FC = () => {
  return (
    <>
      <Flex>
        <LoginLogo />
        <LoginForm />
      </Flex>
    </>
  );
};

export default LoginPage;
