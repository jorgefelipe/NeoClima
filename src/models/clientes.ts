import firebase from 'firebase';

export interface IClienteItemList {
  clienteId?: string
  clientePhotoURL: string
  clienteName: string
  clienteEmail: string
  clienteDocument: string
  clienteRG: string
  clienteBrithday: string | firebase.firestore.Timestamp
  clientePhoneNumber: string
  clienteCellPhoneNumber: string
  clienteAddress: {
    zipCode: string
    street: string
    streetNumber: string
    neighborhood: string
    city: string
    state: string
    complement: string
  }
}

export interface ICreateCliente {
  clientePhotoURL: string
  clienteName: string
  clienteEmail: string
  clienteDocument: string
  clienteRG: string
  clienteBrithday: string
  clientePhoneNumber: string
  clienteCellPhoneNumber: string
  clienteAddress: {
    zipCode: string
    street: string
    streetNumber: string
    neighborhood: string
    city: string
    state: string
    complement: string
  }
}

export interface IDeleteCliente {
  clienteId: string
}

export interface IUpdateCliente {
  uploadNewImage?: boolean

  clienteId?: string
  clientePhotoURL: string
  clienteName: string
  clienteEmail: string
  clienteDocument: string
  clienteRG: string
  clienteBrithday: string | firebase.firestore.Timestamp
  clientePhoneNumber: string
  clienteCellPhoneNumber: string
  clienteAddress: {
    zipCode: string
    street: string
    streetNumber: string
    neighborhood: string
    city: string
    state: string
    complement: string
  }
}
