import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// *SCREENS
import LaunchMainScreen from './src/screens/launch/LaunchMainScreen';
import DashboardMainScreen from './src/screens/dashboard/DashboardMainScreen';
import LoginOptionsScreen from './src/screens/LoginOptionsScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';

const Stack = createNativeStackNavigator();

const screenOptions: any = {
  headerShown: false,
  statusBarTranslucent: true,
  animation: 'none',
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'DMSans-Bold': require('./assets/fonts/DMSans_24pt-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Launch'>
        <Stack.Screen
          name='Launch'
          component={LaunchMainScreen}
          options={{
            ...screenOptions,
            statusBarStyle: 'dark',
          }}
        />
        <Stack.Screen
          name='DashboardMain'
          component={DashboardMainScreen}
          options={{
            ...screenOptions,
            statusBarStyle: 'light',
          }}
        />

        <Stack.Screen
          name='LoginOptions'
          component={LoginOptionsScreen}
          options={{
            ...screenOptions,
            statusBarStyle: 'light',
          }}
        />

        <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
          options={{
            ...screenOptions,
            statusBarStyle: 'light',
          }}
        />

        <Stack.Screen
          name='SignIn'
          component={SignInScreen}
          options={{
            ...screenOptions,
            statusBarStyle: 'light',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
