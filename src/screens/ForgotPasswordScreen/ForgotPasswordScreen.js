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

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const onSignInPressed = () => {
    // console.warn('back to Sign In');
    navigation.navigate('SignIn');
  };

  const onSendPressed = () => {
    // console.warn('onSendPressed');
    navigation.navigate('NewPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
        />

        <CustomButtons text="SEND" onPress={onSendPressed} />

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

export default ForgotPasswordScreen;
