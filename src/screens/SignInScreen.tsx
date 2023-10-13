import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import SignInHeaderImages from '../components/general/SignInHeaderImages';
import InputContainer from '../components/form/InputContainer';
import LinearGradientBtn from '../components/general/LinearGradientBtn';
import BottomRedirectTexts from '../components/form/BottomRedirectTexts';

const SMS = require('../../assets/images/sms.png');
const PasswordIcon = require('../../assets/images/eye-off-line.png');

function SignInScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SignInHeaderImages />
      <View
        style={{
          bottom: 120,
          alignSelf: 'center',
          width: '90%',
          zIndex: 3,
          gap: 18,
        }}
      >
        <Text style={styles.bigtext}>Sign In</Text>

        <InputContainer
          title='Email'
          passwordInput={false}
          inputPlaceholder='Enter your email'
          icon={SMS}
        />

        <InputContainer
          title='Password'
          passwordInput={true}
          inputPlaceholder='Enter Your Password'
          icon={PasswordIcon}
        />
        <Text
          style={{
            color: '#F18403',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
          }}
        >
          Forgot Password
        </Text>
      </View>

      <View
        style={{
          bottom: 70,
          width: '90%',
          alignSelf: 'center',
        }}
      >
        <LinearGradientBtn
          onButtonPressed={() => navigation.navigate('DashboardMain')}
          btnText='Sign In'
          textFamily='Poppins-Regular'
          textSize={24}
        />

        <BottomRedirectTexts
          onTextPressedHandler={() => navigation.navigate('SignUp')}
          mainText='Dont have an account?'
          linkText='Sign up'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigtext: {
    fontFamily: 'Poppins-Bold',
    color: '#3A3A3A',
    fontSize: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#FFC690',
    color: '#212121',
    width: '100%',
    flex: 1,

    borderWidth: 1,
    borderColor: '#F18403',
    borderRadius: 8,

    paddingHorizontal: 6.4,
    paddingVertical: 4.8,
  },
  inputTitle: {
    color: '#797878',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  btnText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    paddingVertical: 6.4,
    borderRadius: 28,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  bottomTexts: {
    fontSize: 13,
    textAlign: 'center',

    top: 14,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default SignInScreen;
