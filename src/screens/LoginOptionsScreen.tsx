import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

const Ellipse_1 = require('../../assets/images/Ellipse_1.png');
const Ellipse_2 = require('../../assets/images/Ellipse_2.png');
const Ellipse_3 = require('../../assets/images/Ellipse_3.png');

function LoginOptionsScreen() {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <Image
          source={Ellipse_1}
          style={[
            {
              top: 150,
              zIndex: 2,
              width: '90%',
              height: '90%',
              alignSelf: 'center',
            },
            styles.img,
          ]}
        />
        <Image
          source={Ellipse_2}
          style={[
            styles.img,
            {
              left: -65,
              alignSelf: 'flex-start',
              top: -90,
            },
          ]}
        />
        <Image
          source={Ellipse_3}
          style={{
            zIndex: 2,
            top: -60,
            alignSelf: 'flex-end',
          }}
        />
      </View>
      <Text style={[styles.topText, styles.text]}>Welcome back</Text>
      <Pressable
        style={{
          position: 'absolute',
          bottom: 130,
          width: '100%',
        }}
        onPress={() => navigation.navigate('SignIn')}
      >
        <LinearGradient
          colors={['#FF0000', '#F18403']} // Define the gradient colors
          start={{ x: 0, y: 0 }} // Start from the left (0, 0)
          end={{ x: 1, y: 0 }} // End at the right (1, 0)
          style={styles.btn}
        >
          <Text
            style={[
              styles.btnText,
              {
                color: '#FFFFFF',
              },
            ]}
          >
            Sign In
          </Text>
        </LinearGradient>
      </Pressable>

      <Pressable
        style={[styles.btn, styles.signUpBtn]}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text
          style={[
            styles.btnText,
            {
              color: '#FF1717',
            },
          ]}
        >
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    position: 'absolute',
  },
  topText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 32,
    zIndex: 3,
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    paddingVertical: 6.4,
    borderRadius: 28,
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  // signInBtn: {
  //   position: 'absolute',
  //   bottom: 120,
  // },
  signUpBtn: {
    backgroundColor: '#fff',
    borderColor: '#F18403',
    borderWidth: 1,
    position: 'absolute',

    bottom: 55,
  },
  btnText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
});

export default LoginOptionsScreen;
