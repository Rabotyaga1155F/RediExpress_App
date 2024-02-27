import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {supabase} from '../../../supabase.ts';
import {useDispatch} from 'react-redux';
import {createAction} from '@reduxjs/toolkit';

interface IProps {
  navigation: any;
}

const GoogleSignIn: FC<IProps> = ({navigation}) => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '153487173742-2nu7malh2ipk87nuvpqd3mqpa8c7j9os.apps.googleusercontent.com',
  });
  const setUserInfo = createAction<any>('user/setUserInfo');
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo.idToken) {
              const {data, error} = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.idToken,
              });

              dispatch(setUserInfo(userInfo));
              navigation.navigate('Layout');
            } else {
              throw new Error('no id token present');
            }
          } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
        }}>
        <Image
          source={require('../../../../assets/images/icons/google.png')}
          className={' mt-4 mb-4 mx-auto justify-center'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GoogleSignIn;
