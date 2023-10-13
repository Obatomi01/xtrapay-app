import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';
import ProfileTopContainer from '../../components/dashboard/ProfileTopContainer';
import InputContainer from '../../components/form/InputContainer';
import LinearGradientBtn from '../../components/general/LinearGradientBtn';

const ProfilePicture = require('../../../assets/images/rounded_profile_picture.png');
const UploadIcon = require('../../../assets/images/image-add-line.png');

type Props = {};

const ProfileEditScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  const [dob, setDob] = useState('');

  const formatDOB = (input: any) => {
    // Remove any non-numeric characters from the input
    const numericInput = input.replace(/\D/g, '');

    // Format the input as 'dd/mm/yyyy'
    if (numericInput.length <= 2) {
      return numericInput;
    } else if (numericInput.length <= 4) {
      return `${numericInput.slice(0, 2)}/${numericInput.slice(2)}`;
    } else {
      return `${numericInput.slice(0, 2)}/${numericInput.slice(
        2,
        4
      )}/${numericInput.slice(4, 8)}`;
    }
  };

  const handleTextChange = (text: any) => {
    const formattedValue = formatDOB(text);
    setDob(formattedValue);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          height: 105,
        }}
      >
        <InnerScreensHeader pageTitle='Profile' longContents={true} />
      </View>
      <InnerScreensContainer>
        <ProfileTopContainer />

        <View style={styles.mainContainer}>
          <InputContainer
            title='First Name'
            inputPlaceholder=''
            passwordInput={false}
          />
        </View>

        <View style={styles.mainContainer}>
          <InputContainer
            title='Last Name'
            inputPlaceholder=''
            passwordInput={false}
          />
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.inputTitle}>Phone number</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='numeric'
            maxLength={11}
          />
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.inputTitle}>Date of birth</Text>
          <TextInput
            style={styles.textInput}
            keyboardType='numeric'
            placeholder='dd/mm/yyyy'
            value={dob}
            onChangeText={handleTextChange}
            maxLength={10}
          />
        </View>

        <View
          style={[
            styles.mainContainer,
            {
              marginTop: 14,
            },
          ]}
        >
          <LinearGradientBtn
            btnText='Save'
            textFamily='Roboto-Regular'
            textSize={24}
            onButtonPressed={() => navigation.navigate('ProfileSettings')}
          />
        </View>
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: '#FFC690',
    borderWidth: 1,
    borderColor: '#F18403',

    borderRadius: 8,

    paddingHorizontal: 6.4,

    paddingVertical: 4.8,
    fontFamily: 'Poppins-Regular',
  },
  inputTitle: {
    color: '#797878',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default ProfileEditScreen;
