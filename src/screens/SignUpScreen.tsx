import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import SignInHeaderImages from '../components/general/SignInHeaderImages';

import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

// * RADIO BUTTONS
import RadioButtons from '../components/form/RadioButtons';
import { Checkbox } from 'react-native-paper';

import InputContainer from '../components/form/InputContainer';
import LinearGradientBtn from '../components/general/LinearGradientBtn';
import BottomRedirectTexts from '../components/form/BottomRedirectTexts';

const SMS = require('../../assets/images/sms.png');
const PasswordIcon = require('../../assets/images/eye-off-line.png');

const userOptions = [
  {
    title: 'Member',
  },
  {
    title: 'User',
  },
  {
    title: 'Agent',
  },
];

function SignUpScreen() {
  const [termsChecked, setTermsChecked] = useState(false);

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
      }}
    >
      <ScrollView
        style={
          {
            // flexGrow: 1,
          }
        }
      >
        <SignInHeaderImages />
        <View
          style={{
            // position: 'a',
            bottom: 90,
            width: '90%',
            alignSelf: 'center',

            gap: 18,
            zIndex: 3,
            height: '100%',
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: '#3A3A3A',
              fontSize: 32,
            }}
          >
            Sign Up
          </Text>

          <RadioButtons
            options={userOptions}
            initialActive='Member'
            containerStyle={{
              justifyContent: 'space-between',
            }}
          />

          <InputContainer
            title='Email'
            passwordInput={false}
            inputPlaceholder='Enter Your Email'
            icon={SMS}
          />
          <InputContainer
            title='Password'
            passwordInput={true}
            inputPlaceholder='Enter Your Password'
            icon={PasswordIcon}
          />
          <InputContainer
            title='Confirm Password'
            passwordInput={true}
            inputPlaceholder='Confirm Password'
            icon={PasswordIcon}
          />

          <View
            style={{
              flexDirection: 'row',
              width: '100%',

              alignItems: 'center',
            }}
          >
            <Checkbox
              status={termsChecked ? 'checked' : 'unchecked'}
              onPress={() => {
                setTermsChecked(!termsChecked);
              }}
              color='#FF190B'
            />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                flex: 1,
              }}
            >
              By creating your account you agree with to our Terms and
              Conditions.
            </Text>
          </View>

          <LinearGradientBtn
            onButtonPressed={() => navigation.navigate('DashboardMain')}
            btnText='Sign Up'
            textFamily='Poppins-Regular'
            textSize={24}
          />
          <BottomRedirectTexts
            onTextPressedHandler={() => navigation.navigate('SignIn')}
            mainText='Already have an account?'
            linkText='Sign in'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUpScreen;
