import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FundScreen from './FundScreen';
import MerchantDepositScreen from './MerchantDepositScreen';
import LocateAgentScreen from './LocateAgentScreen';
import BankTransferScreen from './BankTransferScreen';
import CardTransferScreen from './CardTransferScreen';
import AddMoneyScreen from './AddMoneyScreen';
import AccountFundedScreen from './AccountFundedScreen';
import ScanScreen from './ScanScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const screenOptions: any = {
  headerShown: false,
  statusBarTranslucent: true,
  animation: 'none',
};

const FundMainScreen = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='Fund'>
      <Stack.Screen
        component={FundScreen}
        name='Fund'
        options={{
          ...screenOptions,
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        component={MerchantDepositScreen}
        name='MerchantDeposit'
        options={{
          ...screenOptions,
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        component={BankTransferScreen}
        name='BankTransfer'
        options={{
          ...screenOptions,
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        component={LocateAgentScreen}
        name='LocateAgent'
        options={{
          ...screenOptions,
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        component={AccountFundedScreen}
        name='AccountFunded'
        options={{
          ...screenOptions,
          statusBarStyle: 'dark',
        }}
      />
      <Stack.Screen
        component={CardTransferScreen}
        name='CardTransfer'
        options={{
          ...screenOptions,
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        component={AddMoneyScreen}
        name='AddMoney'
        options={{
          ...screenOptions,
          statusBarStyle: 'light',
        }}
      />
      <Stack.Screen
        component={ScanScreen}
        name='ScanScreen'
        options={{
          ...screenOptions,
          statusBarStyle: 'light',
        }}
      />
    </Stack.Navigator>
  );
};

export default FundMainScreen;
