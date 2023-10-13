import { View, Text } from 'react-native';
import React from 'react';

// * RADIO BUTTON
// import { RadioButton } from 'react-native-paper';

type BtnProps = {
  title: string;
  onChangeOptionHandler: (option: string) => void;
};

const RadioButton = (props: BtnProps) => {
  return (
    <View>
      <Text>RadioButton</Text>
    </View>
  );
};

export default RadioButton;
