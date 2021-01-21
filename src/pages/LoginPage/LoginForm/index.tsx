import React from 'react';
import { Animate } from 'react-simple-animate';

import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { FormControl, Input } from '@chakra-ui/react';
import { Title } from 'components/ui/Text';
const LoginFrom: React.FC = () => {
  return (
    <Animate play duration={1} start={{opacity:0}} end={{opacity:1}}>
      <Flex w="55vw" h="100vh" justifyContent="center" alignItems="center">
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Title color="primaryLight">Área Administrativa</Title>
          <Text marginBottom="margin2x">Acesse sua conta</Text>

          <FormControl marginBottom="margin" id="email">
            <Input placeholder="informe seu email" type="email" />
          </FormControl>

          <FormControl id="password" marginTop="margin">
            <Input placeholder="informe sua senha" type="password" />
          </FormControl>
          <Button
            w="400px"
            marginTop="margin3x"
            padding="padding2x"
            borderRadius="10px"
            colorScheme="teal"
            variant="outline"
            fontWeight="700"
          >
            Continuar
          </Button>
          <Link margin="margin">Esqueceu sua senha?</Link>
        </Flex>
      </Flex>
    </Animate>
  );
};

export default LoginFrom;
