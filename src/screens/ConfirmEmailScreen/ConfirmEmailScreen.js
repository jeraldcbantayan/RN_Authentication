import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButtons from '../../components/CustomButtons/CustomButtons';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    // console.warn('back to Sign In');
    navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.warn('onResendPressed');
  };
  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy');
  };

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButtons text="Confirm" onPress={onConfirmPressed} />

        <CustomButtons
          text="Resend Code "
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButtons
          text="Back to Sign In "
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
