import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './DashboardScreen';
import WithdrawMainScreen from './withdraw/WithdrawMainScreen';
import FundMainScreen from './fund/FundMainScreen';
import TransactionHistoryScreen from './TransactionHistoryScreen';
import NotificationScreen from './NotificationScreen';
import AirtimeScreen from './AirtimeScreen';
import DataScreen from './DataScreen';
import BillsPaymentScreen from './BillsPaymentScreen';
import MyCardsScreen from './MyCardsScreen';
import SettingsMainScreen from './settings/SettingsMainScreen';

import SettingsScreen from './settings/SettingsScreen';
import KYCSettingsScreen from './settings/KYCSettingsScreen';
import KYCUpradeScreen from './settings/KYCUpradeScreen';
import KYCUpgradeSuccessScreen from './settings/KYCUpgradeSuccessScreen';
import PinScreen from './airtime/PinScreen';

import TransferMainScreen from './transfer/TransferMainScreen';
import ProfileEditScreen from './ProfileEditScreen';
import ProfileSettingsScreen from './settings/ProfileSettingsScreen';

const Stack = createNativeStackNavigator();

const screenOptions: any = {
  headerShown: false,
  statusBarTranslucent: true,
  animation: 'none',
};

function DashboardMainScreen() {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>
      <Stack.Screen
        component={DashboardScreen}
        name='Dashboard'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={WithdrawMainScreen}
        name='WithdrawMain'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={FundMainScreen}
        name='FundMain'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={TransactionHistoryScreen}
        name='TransactionHistory'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={NotificationScreen}
        name='Notifications'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />

      <Stack.Screen
        component={DataScreen}
        name='Data'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={BillsPaymentScreen}
        name='BillsPayment'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={MyCardsScreen}
        name='MyCards'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      {/* *SETTINGS SCREEN */}
      <Stack.Screen
        component={SettingsScreen}
        name='Settings'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={KYCSettingsScreen}
        name='KYCSettings'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={KYCUpradeScreen}
        name='KYCUpgrade'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={KYCUpgradeSuccessScreen}
        name='KYCUpgradeSuccess'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      {/* AIRTIME SCREEN */}
      <Stack.Screen
        component={AirtimeScreen}
        name='Airtime'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={PinScreen}
        name='AirtimePin'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      {/* TRANSFER SCREEN */}
      <Stack.Screen
        component={TransferMainScreen}
        name='TransferMain'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      {/* PROFILE SCREENS */}
      <Stack.Screen
        component={ProfileEditScreen}
        name='ProfileEdit'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={ProfileSettingsScreen}
        name='ProfileSettings'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
    </Stack.Navigator>
  );
}

export default DashboardMainScreen;
