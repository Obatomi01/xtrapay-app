import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

// * RADIO BUTTON
import { RadioButton } from 'react-native-paper';

type OptionProps = {
  title: string;
};

type BtnProps = {
  options: OptionProps[];
  initialActive: string;
  containerStyle: any;
};

const userOptions = [
  {
    title: 'Member',
  },
  {
    title: 'User',
  },
  {
    title: 'Agent',
  },
];

const RadioButtons = (props: BtnProps) => {
  const [userType, setUserType] = useState(props.initialActive);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignSelf: 'center',

          zIndex: 3,

          width: '100%',
        },
        props.containerStyle,
      ]}
    >
      {props.options.map((option: OptionProps, index: any) => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          key={index}
        >
          <RadioButton
            value={option.title}
            onPress={() => setUserType(option.title)}
            status={userType === option.title ? 'checked' : 'unchecked'}
            color='#FF190B'
          />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#000000',
              fontSize: 13,
            }}
          >
            {option.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default RadioButtons;
