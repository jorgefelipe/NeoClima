import { useForm } from 'react-hook-form';

import { Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers';
import {
  DefaultModal,
  InputDefault,
  ModalButton,
  SecondaryText,
} from 'components/ui';
import { useAuth } from 'hooks';
import * as yup from 'yup';

interface IProps {
  showModal: boolean;
  setShowModal(showModal: boolean): void;
}

const ModalRecoverPassword: React.FC<IProps> = ({
  showModal,
  setShowModal,
}) => {
  const { recoverPassword } = useAuth();
  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
  });

  const { register, errors, handleSubmit } = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: { email: string }) => {
    recoverPassword(values);
    setShowModal(false);
  };

  return (
    <DefaultModal
      isOpen={showModal}
      setIsOpen={setShowModal}
      header="Recuperar Senha"
      size="600px"
    >
      <SecondaryText textAlign="left">
        Informe seu email para receber as instruções de redefinição da senha.
      </SecondaryText>
      <InputDefault
        name="email"
        register={register}
        errorMsg={errors.email?.message}
        label="E-mail"
        labelColor="gray.700"
        placeholder="Insira seu email"
      />
      <Flex justify="flex-end">
        <ModalButton color="gray.500" onClick={() => setShowModal(false)}>
          cancelar
        </ModalButton>
        <ModalButton ml="7px" onClick={handleSubmit(onSubmit)}>
          concluir
        </ModalButton>
      </Flex>
    </DefaultModal>
  );
};

export default ModalRecoverPassword;
