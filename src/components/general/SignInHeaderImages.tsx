import { View, Image, StyleSheet, Text } from 'react-native';

const Ellipse_1 = require('../../../assets/images/Ellipse_1.png');
const Ellipse_2 = require('../../../assets/images/Ellipse_2.png');
const Ellipse_3 = require('../../../assets/images/Ellipse_3.png');

function SignInHeaderImages() {
  return (
    <View>
      <Image
        source={Ellipse_1}
        style={[
          {
            top: 30,
            zIndex: 2,
            width: '70%',
            height: '70%',
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
            left: -55,
            alignSelf: 'flex-start',
            top: -320,
          },
        ]}
      />
      <Image
        source={Ellipse_3}
        style={{
          zIndex: 2,
          top: -180,
          alignSelf: 'flex-end',
        }}
      />
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'Poppins-Regular',
          fontSize: 32,
          zIndex: 3,
          position: 'absolute',
          alignSelf: 'center',
          top: 120,
        }}
      >
        Welcome Back
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default SignInHeaderImages;
