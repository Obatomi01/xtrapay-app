import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

const ArrowRight = require('../../../assets/images/Path.png');

type FundOptionProp = {
  title: string;
  description: string;
  optionLinkTo: string;
  iconImg: any;
  titleParams?: any;
};

type Props = {
  options: FundOptionProp[];
};

const WithdrawFundOptions = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View>
      {props.options.map((option: FundOptionProp) => (
        <Pressable
          onPress={() => {
            option.titleParams
              ? navigation.navigate(option.optionLinkTo, option.titleParams)
              : navigation.navigate(option.optionLinkTo);
          }}
          key={option.title}
        >
          <View
            style={{
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: '#C4C4C4',

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: '#FFE9D7',
                  height: 48,
                  width: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
              >
                <Image source={option.iconImg} />
              </View>

              <View
                style={{
                  width: '75%',
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Poppins-Medium',
                  }}
                >
                  {option.title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Poppins-Light',
                  }}
                >
                  {option.description}
                </Text>
              </View>
            </View>

            <View>
              <Image source={ArrowRight} />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default WithdrawFundOptions;
