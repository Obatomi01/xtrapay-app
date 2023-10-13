import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

type BtnProps = {
  onButtonPressed: () => void;
  btnText: string;
  textSize: number;
  textFamily: string;
  canBeClicked?: boolean;
  changeClickability?: boolean;
};

const LinearGradientBtn = (props: BtnProps) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={{
        width: '100%',
      }}
      onPress={props.onButtonPressed}
      disabled={props.changeClickability && !props.canBeClicked}
    >
      <LinearGradient
        colors={['#FF0000', '#F18403']} // Define the gradient colors
        start={{ x: 0, y: 0 }} // Start from the left (0, 0)
        end={{ x: 1, y: 0 }} // End at the right (1, 0)
        style={[
          styles.btn,
          props.changeClickability
            ? props.canBeClicked
              ? styles.clickable
              : styles.unClickable
            : styles.clickable,
        ]}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: props.textSize,
            fontFamily: props.textFamily,
          }}
        >
          {props.btnText}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    borderRadius: 28,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  clickable: {
    opacity: 1,
  },
  unClickable: {
    opacity: 0.6,
  },
});

export default LinearGradientBtn;
