import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function () {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '153487173742-t8sj10fvdfkvg7ovtnlqjuqv0ndbr2um.apps.googleusercontent.com',
  });
}
