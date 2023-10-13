import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

type Props = {
  inputTitle: string;
  inputPlaceholder: string;
  inputType: any;
};

const WhiteInputContainer = (props: Props) => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        marginVertical: 12,
      }}
    >
      <Text
        style={{
          color: '#3A3A3A',
          fontSize: 14,
          fontFamily: 'Poppins-SemiBold',
        }}
      >
        {props.inputTitle}
      </Text>
      <TextInput
        placeholder={props.inputPlaceholder}
        keyboardType={props.inputType}
        style={[styles.inputContainer]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    paddingVertical: 6.4,
    paddingHorizontal: 12,

    fontSize: 14,
    fontFamily: 'Poppins-SmeiBold',
  },
});

export default WhiteInputContainer;
