import { View, Text } from 'react-native';
import React from 'react';

type Props = {};

const LevelProgressContainer = (props: Props) => {
  return (
    <View
      style={{
        width: 150,
        marginVertical: 12,
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          backgroundColor: '#56BE15',
          width: '50%',
          height: 4,
        }}
      ></View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '50%',
          height: 4,
        }}
      ></View>
    </View>
  );
};

export default LevelProgressContainer;
