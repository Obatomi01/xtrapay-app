import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import LinearGradientBtn from './LinearGradientBtn';

const CheckMark = require('../../../assets/images/Polygon_1.png');
const Background_1 = require('../../../assets/images/account_funded_1.png');
const Background_2 = require('../../../assets/images/account_funded_2.png');
const ArrowLeft = require('../../../assets/images/arrow-left-black.png');

type SuccessProps = {
  successTitle: string;
  successSummary: string;
  btnText: string;
  btnPressedHandler: () => void;
  showBtn: boolean;
};

const SuccessMessageContainer = (props: SuccessProps) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight && StatusBar.currentHeight * 2,
      }}
    >
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
        }}
      >
        {props.showBtn && (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={ArrowLeft}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          </Pressable>
        )}
        <View
          style={{
            // backgroundColor: '#000',
            width: '80%',
            alignSelf: 'center',
            position: 'relative',
            alignItems: 'center',
            top: 36,
          }}
        >
          <Image source={Background_2} />
          <Image
            source={Background_1}
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              top: 72,
            }}
          />
          <View
            style={{
              backgroundColor: '#F18403',
              width: 108,
              height: 108,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,

              position: 'absolute',
              top: 52,
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                width: 80,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}
            >
              <Image source={CheckMark} />
            </View>
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 64,
            fontSize: 26,
            fontFamily: 'Poppins-Bold',
            color: '#3A3A3A',
          }}
        >
          {props.successTitle}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
            color: '#3A3A3ACC',
          }}
        >
          {props.successSummary}
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 96,
          width: '90%',
          alignSelf: 'center',
        }}
      >
        <LinearGradientBtn
          onButtonPressed={() => props.btnPressedHandler()}
          textFamily='Poppins-Regular'
          textSize={24}
          btnText={props.btnText}
        />
      </View>
    </View>
  );
};

export default SuccessMessageContainer;
