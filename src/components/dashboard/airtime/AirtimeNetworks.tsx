import { View, Text } from 'react-native';
import React from 'react';
import AirtimeNetwork from './AirtimeNetwork';

const Airtel = require('../../../../assets/images/airtel_bg.png');
const MTN = require('../../../../assets/images/mtn_bg.png');
const GLO = require('../../../../assets/images/glo_bg.png');
const Mobile9 = require('../../../../assets/images/9mobile_bg.png');

type Props = {};

type NetworkOption = {
  name: string;
  brandColor: any;
  nameFontSize: number;
  nameFontFamily: string;
  nameFontColor: string;
};

const networkOptions: NetworkOption[] = [
  {
    name: 'Airtel',
    brandColor: Airtel,
    nameFontFamily: 'Roboto-Bold',
    nameFontSize: 17,
    nameFontColor: '#fff',
  },
  {
    name: 'MTN',
    brandColor: MTN,
    nameFontFamily: 'Roboto-Bold',
    nameFontSize: 15,
    nameFontColor: '#000',
  },
  {
    name: 'GLO',
    brandColor: GLO,
    nameFontFamily: 'Roboto-Bold',
    nameFontSize: 15,
    nameFontColor: '#fff',
  },
  {
    name: '9mobile',
    brandColor: Mobile9,
    nameFontFamily: 'Roboto-Bold',
    nameFontSize: 10,
    nameFontColor: '#fff',
  },
];

const AirtimeNetworks = (props: Props) => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',

        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {networkOptions.map((option: NetworkOption, index: any) => (
        <AirtimeNetwork
          name={option.name}
          brandColor={option.brandColor}
          nameFontFamily={option.nameFontFamily}
          nameFontSize={option.nameFontSize}
          key={index}
          nameFontColor={option.nameFontColor}
        />
      ))}
    </View>
  );
};

export default AirtimeNetworks;
