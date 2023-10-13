import { View, Text, Image, StatusBar } from 'react-native';
import React from 'react';

type Props = {};

const Ellipse_1 = require('../../../assets/images/Rectangle.png');
const Ellipse_2 = require('../../../assets/images/Ellipse_5.png');
const Ellipse_3 = require('../../../assets/images/Ellipse_6.png');

const DashboardHeader = (props: Props) => {
  return (
    <View>
      <Image
        source={Ellipse_1}
        style={{
          position: 'absolute',

          top: StatusBar.currentHeight && StatusBar.currentHeight * -1.2,

          resizeMode: 'contain',
          width: '100%',
        }}
      />
      <Image
        source={Ellipse_2}
        style={{
          position: 'absolute',
          right: 0,

          resizeMode: 'contain',
        }}
      />
      <Image
        source={Ellipse_3}
        style={{
          position: 'absolute',
          right: 0,

          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default DashboardHeader;
