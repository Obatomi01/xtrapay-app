import {
  View,
  Text,
  Image,
  StatusBar,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { hexToRgb } from '@mui/material';
import { height } from '@mui/system';

type HeaderProps = {
  pageTitle: string;
  longTitle?: boolean;
  longContents?: boolean;
};

const ArrowLeft = require('../../../assets/images/arrow-left.png');
const Ellipse_1 = require('../../../assets/images/Ellipse_7.png');
const Ellipse_2 = require('../../../assets/images/Ellipse_5.png');

const InnerScreensHeader = (props: HeaderProps) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={[
        {
          backgroundColor: '#FF0000',
          position: 'relative',
          // paddingBottom: 6.4,
          // top: ''
          // height: '120%',
        },
        props.longContents ? styles.longContents : styles.shortContents,
      ]}
    >
      <View
        style={{
          width: '100%',

          alignSelf: 'center',

          // top: 50,
          bottom: 15,
          position: 'absolute',

          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'center',

          zIndex: 5,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
            zIndex: 1, // Adjust the z-index to control the stacking order
          }}
        >
          <Image
            source={ArrowLeft}
            style={{
              width: 48,
              height: 24,

              resizeMode: 'contain',
              // position: 'absolute',
              // backgroundColor: '#000',
              // bottom: '-50%',
            }}
          />
        </Pressable>

        <View
          style={{
            flex: 1,
            // justifyContent: 'center',
            // position: 'absolute',
            // bottom: -5,
          }}
        >
          <Text
            style={{
              width: '80%',

              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 24,
              color: '#fff',
              fontFamily: 'Roboto-Bold',
              zIndex: 10,
            }}
          >
            {props.pageTitle}
          </Text>
        </View>
      </View>
      <Image
        source={Ellipse_1}
        style={{
          // position: 'absolute',
          alignSelf: 'flex-end',
          top: StatusBar.currentHeight && StatusBar.currentHeight * -0.1,

          resizeMode: 'contain',
          zIndex: 3,
          // height: '100%',
        }}
      />
      <Image
        source={Ellipse_2}
        style={{
          // position: 'absolute',
          alignSelf: 'flex-end',
          top: StatusBar.currentHeight && StatusBar.currentHeight * -5,

          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shortContents: {
    flex: 0.17,
    // height: 120,
  },
  longContents: {
    flex: 1,
  },
});

export default InnerScreensHeader;
