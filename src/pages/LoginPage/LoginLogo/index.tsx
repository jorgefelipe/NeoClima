import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';
import {Title} from 'components/Ui/Text';

import logo from 'assets/images/logo.png';

const LoginLogo: React.FC = () => {
  return (
    <Flex
      w="45%"
      h="100vh"
      background="primary"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      padding="padding2x"
    >
      <Image w="350px" src={logo} />
      <Title
      padding="padding2x"
      w="500px"
      >
        Ar Condicionados, Produtos e Serviços.
      </Title>
    </Flex>
  );
};

export default LoginLogo;
