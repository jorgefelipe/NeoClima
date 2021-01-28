import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Animate } from 'react-simple-animate';

import { Flex, Image } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers';
import {
  InputDefault,
  OutlineButton,
  Title,
  SubTitle,
  SecondaryText,
} from 'components/ui';
import { useAuth } from 'hooks';
import * as yup from 'yup';

import iconQuestion from 'assets/images/iconQuestion.svg';
import { ILogin } from 'models/user';

import ModalRecoverPassword from '../ModalrecoverPassword';

const FormLogin: React.FC = () => {
  const { login, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (values: ILogin) => {
    login(values);
  };

  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    password: yup
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres ')
      .required('Campo obrigatório'),
  });
  const { errors, register, handleSubmit } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  return (
    <>
      <Animate
        play
        duration={0.8}
        start={{ transform: 'translateX(+30vw)', opacity: 0 }}
        end={{ transform: 'translateX(0px)', opacity: 1 }}
      >
        <Flex
          justify="center"
          w={['100vw', '100vw', '100vw', '55vw']}
          minH="100vh"
        >
          <Flex
            flexDir="column"
            w="400px"
            justifyContent="center"
            my="100px"
            p={{ base: 'padding2x', md: '0px' }}
          >
            <Title>Área Administrativa</Title>
            <SubTitle fontWeight="500" textTransform="none">
              Acesse sua conta
            </SubTitle>

            <InputDefault
              name="email"
              register={register}
              label="E-mail"
              placeholder="Informe seu e-mail"
              errorMsg={errors.email?.message}
            />
            <InputDefault
              type={showPassword ? 'text' : 'password'}
              name="password"
              register={register}
              label="Senha"
              placeholder="Informe sua senha"
              iconRigth={showPassword ? FaEyeSlash : FaEye}
              onPressIconRigth={() => setShowPassword(!showPassword)}
              errorMsg={errors.password?.message}
            />
            <OutlineButton
              mt="margin"
              mb="margin2x"
              isLoading={loading}
              onClick={handleSubmit(onSubmit)}
            >
              Continuar
            </OutlineButton>
            <SecondaryText
              display="flex"
              flexDir="row"
              justifyContent="center"
              color="gray.500"
              fontSize="p"
              cursor="pointer"
              mb="margin2x"
              onClick={() => setShowModal(true)}
              alignItems="center"
            >
              <Image src={iconQuestion} w="20px" h="20px" mr="8px" />
              Esqueceu a senha?
            </SecondaryText>
          </Flex>
        </Flex>
      </Animate>
      <ModalRecoverPassword showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default FormLogin;
