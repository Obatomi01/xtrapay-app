import { View, Text } from 'react-native';
import React from 'react';

type StepProps = {
  step: string;
  iconImg: any;
};

const BankTransferStep = (props: StepProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',

        gap: 18,
        alignItems: 'center',
      }}
    >
      {props.iconImg}
      <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, flex: 1 }}>
        {props.step}
      </Text>
    </View>
  );
};

export default BankTransferStep;
