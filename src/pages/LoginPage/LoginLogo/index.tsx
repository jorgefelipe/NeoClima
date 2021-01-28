import React from 'react';
import { Animate } from 'react-simple-animate';

import { Flex, Image } from '@chakra-ui/react';
import { Title } from 'components/ui/Text';

import Logo from 'assets/images/Logo.png';

const LoginLogo: React.FC = () => {
  return (
    <Animate
      play
      duration={1}
      start={{ transform: 'translateY(+40vh)', opacity: 0 }}
      end={{ transform: 'translateY(0px)', opacity: 1 }}
    >
      <Flex
        w="45vw"
        h="100vh"
        background="primary"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        padding="padding2x"
      >
        <Image w="350px" src={Logo} />
        <Title padding="padding2x" w="500px">
          Ar Condicionados, Produtos e Serviços.
        </Title>
      </Flex>
    </Animate>
  );
};

export default LoginLogo;
