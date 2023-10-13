import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import WhiteInputContainer from '../../../components/form/WhiteInputContainer';
import RadioButtons from '../../../components/form/RadioButtons';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

const ArrowDown = require('../../../../assets/images/arrow-down-s-line.png');
const Document = require('../../../../assets/images/fa-solid_file-upload.png');

type Props = {};

type InputOptions = {
  inputTitle: string;
  inputPlaceholder: string;
  inputType: any;
};

const inputOptions: InputOptions[] = [
  {
    inputTitle: 'Enter BVN',
    inputPlaceholder: 'Enter eleven digit number',
    inputType: 'numeric',
  },
  {
    inputTitle: 'First name',
    inputPlaceholder: 'First name',
    inputType: 'default',
  },
  {
    inputTitle: 'Last name',
    inputPlaceholder: 'Last name',
    inputType: 'default',
  },
  {
    inputTitle: 'Phone number',
    inputPlaceholder: 'Phone number linked to BVN',
    inputType: 'numeric',
  },
  {
    inputTitle: 'Date of  birth',
    inputPlaceholder: '',
    inputType: 'default',
  },
];

const genderOptions = [
  {
    title: 'Male',
  },
  {
    title: 'Female',
  },
];

const KYCUpradeScreen = (props: Props) => {
  const navigation = useNavigation<any>();

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
        <InnerScreensHeader pageTitle='KYC Settings' longContents={true} />
      </View>
      <InnerScreensContainer>
        {inputOptions.map((option: InputOptions, index: any) => (
          <WhiteInputContainer
            key={index}
            inputTitle={option.inputTitle}
            inputPlaceholder={option.inputPlaceholder}
            inputType={option.inputType}
          />
        ))}

        <View
          style={{
            width: '90%',
            alignSelf: 'center',

            marginVertical: 24,
          }}
        >
          <Text style={styles.mediumText}>Gender</Text>
          <RadioButtons
            options={genderOptions}
            initialActive='Male'
            containerStyle={{ gap: 70 }}
          />
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        >
          <Text style={styles.mediumText}>Means of identification</Text>
          <View
            style={[
              styles.inputContainer,
              {
                height: 45,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}
          >
            <Text></Text>
            <Image source={ArrowDown} />
          </View>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginVertical: 18,
          }}
        >
          <Text style={styles.mediumText}>Means of identification</Text>
          <View
            style={{
              backgroundColor: '#A9A29B',
              alignItems: 'center',
              paddingVertical: 24,
            }}
          >
            <Image source={Document} />
            <Text
              style={{
                fontSize: 10,
                fontFamily: 'Poppins-Bold',
                color: '#fff',
                marginTop: 8,
              }}
            >
              Upload valid means of identification document
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 8,
                color: '#fff',
              }}
            >
              Image should be less than 2mb
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 24,
          }}
        >
          <LinearGradientBtn
            btnText='Upgrade to KYC level 2'
            textFamily='DMSans-Bold'
            textSize={17}
            onButtonPressed={() => navigation.navigate('KYCUpgradeSuccess')}
          />
        </View>
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    paddingVertical: 6.4,
    paddingHorizontal: 12,
  },
  mediumText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
});

export default KYCUpradeScreen;
