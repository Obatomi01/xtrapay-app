import { View, Text } from 'react-native';
import React from 'react';

type Props = {};

const LevelDisplayContainer = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: '#56BE15',
        // width: 60,
        // height: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingHorizontal: 12,
        width: 65,
        height: 15,
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          width: 5,
          height: 5,
          borderRadius: 30,
        }}
      ></View>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: '#fff',
          fontSize: 10.36,
        }}
      >
        level 1
      </Text>
    </View>
  );
};

export default LevelDisplayContainer;
