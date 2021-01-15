import React from 'react';

import { Flex, Image } from '@chakra-ui/react';
import {Title} from 'components/ui/Text';

import Logo from 'assets/images/logo.png';

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
      <Image w="350px" src={Logo} />
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
