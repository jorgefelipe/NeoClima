import React, { useState } from 'react';
import { Animate } from 'react-simple-animate';


import { Button, Flex,  Text } from '@chakra-ui/react';
import { FormControl, Input } from '@chakra-ui/react';
import { SecondaryText, Title } from 'components/ui/Text';

import ModalRecoverPassword  from '../ModalrecoverPassword';

const LoginFrom: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
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

          <SecondaryText
          margin="margin2x"
          cursor="pointer"
          onClick={() => setShowModal(true)}

          >
            Esqueceu a senha?
          </SecondaryText>

        <ModalRecoverPassword showModal={showModal} setShowModal={setShowModal} />
        </Flex>
      </Flex>
    </Animate>
  );
};

export default LoginFrom;
