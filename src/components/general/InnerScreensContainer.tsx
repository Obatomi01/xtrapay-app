import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  children: any;
  noPaddingTop?: boolean;
};

const InnerScreensContainer = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        zIndex: 1,
        flex: 1,
        paddingTop: props.noPaddingTop ? 0 : 24,
        paddingBottom: 48,
      }}
    >
      {props.children}
    </View>
  );
};

export default InnerScreensContainer;
