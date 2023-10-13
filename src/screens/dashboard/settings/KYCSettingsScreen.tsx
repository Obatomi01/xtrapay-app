import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import LevelDisplayContainer from '../../../components/dashboard/LevelDisplayContainer';
import LevelProgressContainer from '../../../components/dashboard/LevelProgressContainer';
import LinearGradientBtn from '../../../components/general/LinearGradientBtn';

const ProfilePicture = require('../../../../assets/images/rounded_profile_picture.png');

type Props = {};

const KYCSettingsScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='KYC Settings' />
      <InnerScreensContainer>
        <View
          style={{
            backgroundColor: '#f2e9e9',
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              width: '90%',
              paddingVertical: 18,
            }}
          >
            <View
              style={{
                width: '35%',
              }}
            >
              <Image source={ProfilePicture} />
            </View>

            <View
              style={{
                justifyContent: 'space-between',
                paddingVertical: 8,
              }}
            >
              <Text style={styles.mediumText}>Armstrong Enefola</Text>
              <LevelDisplayContainer />
              <LevelProgressContainer />
            </View>
          </View>
        </View>

        <View
          style={[
            {
              elevation: 0.6,
              borderColor: '#F18403',

              marginVertical: 18,
              borderWidth: 0.6,
            },
            styles.cardContainer,
          ]}
        >
          <Text style={styles.boldText}>Current limits Level 1</Text>
          <Text style={styles.semiBoldText}>Benefits</Text>
          <Text style={styles.regText}>
            Get access to generate two account number
          </Text>
          <Text style={styles.regText}>
            Daily transfer limit of{' '}
            <Text style={styles.priceText}>30,000 naira</Text>
          </Text>
        </View>

        <View
          style={[
            styles.cardContainer,
            {
              elevation: 2,
              //   borderWidth: 0.6,
            },
          ]}
        >
          <Text style={styles.boldText}>KYC Level 2</Text>
          <Text style={styles.mediumText}>Benefits</Text>
          <Text style={styles.regText}>
            Get access to generate two account number
          </Text>
          <Text style={styles.regText}>
            Daily transfer limit of{' '}
            <Text style={styles.priceText}>1,000,000 naira</Text>
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 24,
          }}
        >
          <LinearGradientBtn
            btnText='Upgrade to KYC level 2'
            textFamily='DMSans-Bold'
            textSize={17}
            onButtonPressed={() => navigation.navigate('KYCUpgrade')}
          />
        </View>
      </InnerScreensContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#212121',
  },
  cardContainer: {
    width: '90%',
    alignSelf: 'center',

    borderRadius: 16,
    padding: 16,

    gap: 8,
  },
  boldText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#212121',
  },
  semiBoldText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#212121',
  },
  regText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#212121',
  },
  priceText: {
    color: '#F18403',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
});

export default KYCSettingsScreen;
