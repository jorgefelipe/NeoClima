import React from 'react';
import { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import { AlertModal, SecondaryText } from 'components/ui';
import { useAuth } from 'hooks';

const SingoutButton: React.FC = () => {
  const history = useHistory();
  const { logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        variant="unstyled"
        bg="secondary"
        display="flex"
        alignItems="center"
        justify-content="flex-start"
        p="padding2x"
        border="none"
        borderRadius={0}
        onClick={() => setShowModal(true)}
        _hover={{}}
        _focus={{}}
      >
        <AiOutlineLogout color="primaryDark" />
        <SecondaryText ml="margin" fontWeight="500" textAlign="left">
          Sair
        </SecondaryText>
      </Button>
      <AlertModal
        description="Deseja realmente sair?"
        title="Sair"
        onPressConfirm={() => {
          history.replace('/');
          setShowModal(false);
          logout();
        }}
        setShowAlertModal={setShowModal}
        showAlertModal={showModal}
      />
    </>
  );
};

export default SingoutButton;
