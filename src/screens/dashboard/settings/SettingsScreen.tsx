import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';

const ArrowIcon = require('../../../../assets/images/colored_right_icon.png');

type Props = {};

type SettingsOptions = {
  name: string;
  path: string;
};

const settingsOptions: SettingsOptions[] = [
  {
    name: 'KYC settings',
    path: 'KYCSettings',
  },
  {
    name: 'Profile settings',
    path: 'ProfileSettings',
  },
  {
    name: 'Pin settings',
    path: 'PinSettings',
  },
  {
    name: 'Password settings',
    path: 'PassordSettings',
  },
  {
    name: 'Bank Account Settings',
    path: 'BankAccountSettings',
  },
  {
    name: 'Manage Referals',
    path: 'ManageReferals',
  },
  {
    name: 'Contact us',
    path: 'ContactUs',
  },
  {
    name: 'Xtrapay terms and conditions',
    path: 'TermsAndConditions',
  },
  {
    name: 'Login options',
    path: 'LoginOptions',
  },
];

const SettingsScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <InnerScreensHeader pageTitle='Settings' />
      <InnerScreensContainer>
        {settingsOptions.map((option: SettingsOptions, index: any) => (
          <Pressable
            onPress={() => navigation.navigate('KYCSettings')}
            key={index}
          >
            <View style={styles.settingContainer}>
              <Text style={styles.regText}>{option.name}</Text>
              <Image source={ArrowIcon} />
            </View>
          </Pressable>
        ))}
      </InnerScreensContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  regText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '90%',
    alignSelf: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
});

export default SettingsScreen;
