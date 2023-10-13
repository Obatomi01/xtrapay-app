import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ArrowRight = require('../../../assets/images/Path.png');

type InputProps = {
  title: string;
  icon?: any;
  linkTo?: any;
  linkPage?: any;
  passwordInput: boolean;
  inputPlaceholder: string;
  textInputType?: any;
};

const InputContainer = (props: InputProps) => {
  const navigation = useNavigation<any>();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      {props.linkTo ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            paddingVertical: 4.8,
          }}
        >
          <Text style={styles.inputTitle}>{props.title}</Text>

          <Pressable onPress={() => navigation.navigate(props.linkPage)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                gap: 12,
              }}
            >
              <Text
                style={{
                  color: '#F18403',
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                }}
              >
                {props.linkTo}
              </Text>
              <Image source={ArrowRight} />
            </View>
          </Pressable>
        </View>
      ) : (
        <Text style={styles.inputTitle}>{props.title}</Text>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.inputPlaceholder}
          style={styles.textInput}
          selectionColor='#212121'
          secureTextEntry={props.passwordInput && !showPassword ? true : false}
          keyboardType={props.textInputType ? props.textInputType : 'default'}
        />
        {!props.passwordInput ? (
          props.icon && (
            <Image
              source={props.icon}
              style={{
                position: 'absolute',
                right: 6.4,
              }}
            />
          )
        ) : (
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',

              right: 6.4,
              alignItems: 'center',
            }}
          >
            <Image source={props.icon} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#FFC690',
    color: '#212121',
    width: '100%',
    flex: 1,

    borderWidth: 1,
    borderColor: '#F18403',
    borderRadius: 8,

    paddingHorizontal: 6.4,
    paddingVertical: 4.8,
  },
  inputTitle: {
    color: '#797878',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default InputContainer;
