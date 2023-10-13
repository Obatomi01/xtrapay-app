import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

type BtnProps = {
  onTextPressedHandler: () => void;
  linkText: string;
  mainText: string;
};

const BottomRedirectTexts = (props: BtnProps) => {
  return (
    <View style={styles.bottomTexts}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          color: '#010604',
        }}
      >
        {props.mainText}
      </Text>
      <Pressable onPress={props.onTextPressedHandler}>
        <Text
          style={{
            color: '#FF190B',
            fontFamily: 'Poppins-Bold',
          }}
        >
          {'  '}
          {props.linkText}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTexts: {
    fontSize: 13,
    textAlign: 'center',

    top: 14,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default BottomRedirectTexts;
