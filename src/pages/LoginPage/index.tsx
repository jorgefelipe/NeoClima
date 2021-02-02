import React from 'react';

import { Flex } from '@chakra-ui/react';

import LoginForm from 'pages/LoginPage/LoginForm';
import LoginLogo from 'pages/LoginPage/LoginLogo';
const LoginPage: React.FC = () => {
  return (
    <>
      <Flex overflow="hidden">
        <LoginLogo />
        <LoginForm />
      </Flex>
    </>
  );
};

export default LoginPage;
