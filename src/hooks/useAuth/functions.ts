import { createStandaloneToast } from '@chakra-ui/react';
import firebase from 'firebase';

import { ILogin, IRecoverPassword } from 'models/user';
import { getMessagesByError } from 'utils/getMessageByError';

import { AuthState } from './provider';
const toast = createStandaloneToast();

interface ParamsFunctions<T> {
  state: AuthState
  setState(user: AuthState): void
  setLoading(loading: boolean): void
  data: T
}

export const recoverPassword = async ({
  data,
  setLoading,
}: ParamsFunctions<IRecoverPassword>) => {
  try {
    setLoading(true);
    await firebase.auth().sendPasswordResetEmail(data.email);
    toast({
      title:
        'As instruções para redefinição de senha foram enviadas para o e-mail informado',
      duration: 3000,
      status: 'success'
    });
  } catch (err) {
    console.log(err);
    toast({
      title: 'Não foi possível enviar o email para redefinição de senha',
      description: getMessagesByError(err),
      duration: 5000,
      status: 'error'
    });
  } finally {
    setLoading(false);
  }
};

export const login = async ({
  data,
  setState,
  state,
  setLoading
}: ParamsFunctions<ILogin>) => {
  try {
    console.log('passou2');
    setLoading(true);
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

    setState({ ...state, userIsConnected: true });
    toast({
      title: 'Logado com sucesso',
      duration: 5000,
      status: 'success'
    });
  } catch (err) {
    console.log(err);
    toast({
      title: 'Não foi possível realizar o login',
      description: getMessagesByError(err),
      duration: 5000,
      status: 'error'
    });
  } finally {
    setLoading(false);
  }
};

export const logout = async ({
  setLoading,
  setState,
  state,
}: ParamsFunctions<undefined>) => {
  try {
    setLoading(true);
    await firebase.auth().signOut();
    setState({
      userIsConnected: false
    });
  } catch (err) {
    console.log(err);
    toast({
      title: 'Não foi possível se desconectar',
      description: getMessagesByError(err),
      duration: 5000,
      status: 'error'
    });
  } finally {
    setLoading(false);
  }
};
