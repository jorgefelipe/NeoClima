import fetch from 'cross-fetch';
import firebase from 'firebase';

export const uploadImgGetDownloadURL = async (
  uri: string,
  imageName: string,
  path: string
) =>{
  const response = await fetch(uri);
  const blob = await response.blob();

  const ref = firebase.storage().ref().child(`${path}${imageName}`);
return(await ref.put(blob)).ref.getDownloadURL();
};
