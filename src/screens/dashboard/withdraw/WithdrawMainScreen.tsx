import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WithdrawScreen from './WithdrawScreen';
import MerchantTransferScreen from './MerchantTransferScreen';
import WithdrawWithCardScreen from './WithdrawWithCardScreen';
import WithdrawToAccountScreen from './WithdrawToAccountScreen';
import ConfirmPinScreen from '../ConfirmPinScreen';

const Stack = createNativeStackNavigator();

const screenOptions: any = {
  animation: 'none',
  statusBarTranslucent: true,
  headerShown: false,
};

const WithdrawMainScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Withdraw'>
      <Stack.Screen
        component={WithdrawScreen}
        name='Withdraw'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={MerchantTransferScreen}
        name='MerchantTransfer'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={WithdrawWithCardScreen}
        name='WithdrawWithCard'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={WithdrawToAccountScreen}
        name='WithdrawToAccount'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
      <Stack.Screen
        component={ConfirmPinScreen}
        name='ConfirmPin'
        options={{ ...screenOptions, statusBarStyle: 'light' }}
      />
    </Stack.Navigator>
  );
};

export default WithdrawMainScreen;
