import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'react-native';

import SettingsScreen from './SettingsScreen';
import KYCSettingsScreen from './KYCSettingsScreen';
import KYCUpradeScreen from './KYCUpradeScreen';
import KYCUpgradeSuccessScreen from './KYCUpgradeSuccessScreen';
import DashboardMainScreen from '../DashboardMainScreen';

const Stack = createNativeStackNavigator();

const screenOptions: any = {
  headerShown: false,
  statusBarTranslucent: true,
  animation: 'none',
};

const SettingsMainScreen = () => {
  return (
    // <Stack.Navigator initialRouteName='Settings'>
    //   <Stack.Screen
    //     component={SettingsScreen}
    //     name='Settings'
    //     options={{ ...screenOptions, statusBarStyle: 'light' }}
    //   />
    //   <Stack.Screen
    //     component={KYCSettingsScreen}
    //     name='KYCSettings'
    //     options={{ ...screenOptions, statusBarStyle: 'light' }}
    //   />
    //   <Stack.Screen
    //     component={KYCUpradeScreen}
    //     name='KYCUpgrade'
    //     options={{ ...screenOptions, statusBarStyle: 'light' }}
    //   />
    //   <Stack.Screen
    //     component={KYCUpgradeSuccessScreen}
    //     name='KYCUpgradeSuccess'
    //     options={{ ...screenOptions, statusBarStyle: 'light' }}
    //   />
    // </Stack.Navigator>
    <View></View>
  );
};

export default SettingsMainScreen;
