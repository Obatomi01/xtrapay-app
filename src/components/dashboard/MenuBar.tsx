import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import LevelDisplayContainer from './LevelDisplayContainer';
import LevelProgressContainer from './LevelProgressContainer';

const DashboardIcon = require('../../../assets/images/dashboard_icon.png');
const TransactionsIcon = require('../../../assets/images/transfer_black.png');
const Airtimecon = require('../../../assets/images/Airtime_black.png');
const DataIcon = require('../../../assets/images/data_black_icon.png');
const BillsIcon = require('../../../assets/images/bills_payment.png');
const CardsIcon = require('../../../assets/images/cards_black_icon.png');
const SettingsIcon = require('../../../assets/images/settings_icon.png');

const ProfilePicture = require('../../../assets/images/profile_picture.png');
const ArrowRight = require('../../../assets/images/Path.png');

const LogoutIcon = require('../../../assets/images/logout_icon.png');
const DarkMode = require('../../../assets/images/dark-mode.png');
const ScanIcon = require('../../../assets/images/scan_code_icon.png');

type Props = {
  onClickLink: () => void;
};

type MenuOptions = {
  name: string;
  iconImg: any;
  path: string;
};

const menuOptions: MenuOptions[] = [
  {
    name: 'Dashboard',
    iconImg: DashboardIcon,
    path: 'Dashboard',
  },
  {
    name: 'Transactions',
    iconImg: TransactionsIcon,
    path: 'TransactionHistory',
  },
  {
    name: 'Airtime',
    iconImg: Airtimecon,
    path: 'Airtime',
  },
  {
    name: 'Data',
    iconImg: DataIcon,
    path: 'Data',
  },
  {
    name: 'Bills Payment',
    iconImg: BillsIcon,
    path: 'BillsPayment',
  },
  {
    name: 'My Cards',
    iconImg: CardsIcon,
    path: 'MyCards',
  },
  {
    name: 'Settings',
    iconImg: SettingsIcon,
    path: 'Settings',
  },
];

const MenuBar = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={['#FF0000', '#F18403']} // Define the gradient colors
        start={{ x: 0, y: 0 }} // Start from the left (0, 0)
        end={{ x: 1, y: 0 }} // End at the right (1, 0)
        style={{ flex: 0.2 }}
      >
        <Pressable
          onPress={() => navigation.navigate('ProfileEdit')}
          style={{
            position: 'absolute',
            bottom: 12,
            width: '90%',
            alignSelf: 'center',

            flexDirection: 'row',
            gap: 12,
          }}
        >
          <View>
            <Image source={ProfilePicture} />
          </View>

          <View>
            <Text style={styles.semiBoldText}>Hello, Armstrong</Text>

            <LevelDisplayContainer />

            <LevelProgressContainer />

            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                fontFamily: 'Poppins-SemiBold',
              }}
            >
              Welcome back to xtrapay
            </Text>
          </View>
        </Pressable>
      </LinearGradient>

      <View
        style={{
          flex: 0.8,
          backgroundColor: '#fff',
          height: 300,
        }}
      >
        {menuOptions.map((option: MenuOptions) => (
          <Pressable
            onPress={() => {
              props.onClickLink();
              navigation.navigate(option.path);
            }}
            key={option.name}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 14,
                borderBottomWidth: 1,
                borderBottomColor: '#C4C4C4',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',

                  width: '60%',
                }}
              >
                <View
                  style={{
                    width: '30%',
                  }}
                >
                  <Image source={option.iconImg} />
                </View>
                <Text style={styles.linkText}>{option.name}</Text>
              </View>
              <Image source={ArrowRight} />
            </View>
          </Pressable>
        ))}

        <Pressable
          style={{
            paddingVertical: 28,

            borderBottomWidth: 1,
            borderBottomColor: '#C4C4C4',
          }}
        >
          <LinearGradient
            colors={['#FF0000', '#F18403']} // Define the gradient colors
            start={{ x: 0, y: 0 }} // Start from the left (0, 0)
            end={{ x: 1, y: 0 }} // End at the right (1, 0)
            style={{
              padding: 12,
              width: '90%',
              alignSelf: 'center',
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
              }}
            >
              Become auth
            </Text>
          </LinearGradient>
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',

            marginTop: 12,
          }}
        >
          <Image source={LogoutIcon} />
          <Image source={DarkMode} />
          <Image source={ScanIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  semiBoldText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  linkText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#3A3A3A',
    alignSelf: 'flex-start',
  },
});

export default MenuBar;
