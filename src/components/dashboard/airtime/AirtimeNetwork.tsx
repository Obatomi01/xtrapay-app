import { View, Text, ImageBackground } from 'react-native';
import React from 'react';

const Airtel = require('../../../../assets/images/airtel_bg.png');

type Props = {
  name: string;
  brandColor: any;
  nameFontSize: number;
  nameFontFamily: string;
  nameFontColor: string;
};

const AirtimeNetwork = (props: Props) => {
  return (
    <View
      style={{
        width: 72,
        height: 72,
        elevation: 2,
        borderRadius: 4,

        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ImageBackground
        source={props.brandColor}
        style={{
          width: 48,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: props.nameFontSize,
            fontFamily: props.nameFontFamily,
            color: props.nameFontColor,
          }}
        >
          {props.name}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default AirtimeNetwork;
