import {View, Text} from 'react-native';
import React from 'react';
import CustomButtons from '../CustomButtons/CustomButtons';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };
  const onSignInApple = () => {
    console.warn('Apple');
  };
  return (
    <>
      <CustomButtons
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />

      <CustomButtons
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButtons
        text="Sign in with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
