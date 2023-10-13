import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useState, useRef, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

const TransferInSeconds = require('../../../assets/images/lf30_06ixtbay.json].png');
const PayBills = require('../../../assets/images/lf20_7Ht9wn.json].png');
const ExtraCard1 = require('../../../assets/images/Frame_123.png');
const ExtraCard2 = require('../../../assets/images/Group_55917.png');
const ExtraCard3 = require('../../../assets/images/Group_55918.png');

import AnimatedImage from '../../components/animations/AnimatedImage';

const featuresData = [
  {
    featureImg: TransferInSeconds,
    featureHeading: 'Transfer Money in Seconds',
    featureDescription:
      'send money and recieve money in seconds anywhere and anytime',
    id: 0,
  },
  {
    featureImg: TransferInSeconds,
    featureHeading: 'Transfer money with ease',
    featureDescription:
      'we make transfering money easy and less stressful, enjoy all the benefits of Xtrapay',
    id: 1,
  },
  {
    featureImg: PayBills,
    featureHeading: 'Pay bills fast and securely',
    featureDescription:
      'we make transfering money easy and less stressful, enjoy all the benefits of Xtrapay',
    id: 2,
  },
  {
    featureImg: ExtraCard1,
    featureHeading: 'Get free Xtrapay cards',
    featureDescription:
      'Get free Xtrapay cards to use for offline tansactions ',
    id: 3,
  },
];

function LaunchMainScreen() {
  const [curFeature, setCurFeature] = useState<any>(0);

  const navigation = useNavigation<any>();

  const flatListRef = useRef<any>();

  const { width } = useWindowDimensions();

  const [scrollIntervalId, setScrollIntervalId] = useState<any>(null);

  // useEffect(() => {
  //   // Function to start automatic scrolling
  //   const startAutomaticScrolling = () => {
  //     const intervalId = setInterval(() => {
  //       // Calculate the next item index and wrap around if needed
  //       const nextItemIndex = (curFeature + 1) % featuresData.length;

  //       // Scroll to the next item
  //       flatListRef.current.scrollToIndex({
  //         index: nextItemIndex,
  //         animated: true,
  //       });

  //       // Update the curFeature state
  //       setCurFeature(nextItemIndex);
  //     }, 3000); // Adjust the interval duration as needed (e.g., 3000ms for 3 seconds)

  //     // Store the interval ID in state
  //     setScrollIntervalId(intervalId);
  //   };

  //   // Delay the initial automatic scrolling by 3 seconds
  //   const initialScrollTimeout = setTimeout(() => {
  //     if (curFeature < 3) {
  //       startAutomaticScrolling();
  //     }
  //   }, 1500);

  //   return () => {
  //     // Clear the interval when the component unmounts
  //     clearInterval(scrollIntervalId);
  //     clearTimeout(initialScrollTimeout);
  //   };
  // }, [curFeature]);

  const renderItem = ({ item }: any) => {
    // * IMAGE ANIMATION
    const opacity = new Animated.Value(0);

    Animated.timing(opacity, {
      toValue: curFeature === item.id ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();

    return (
      <View
        style={[
          styles.featureContainer,
          {
            width: width,
          },
        ]}
      >
        {/* <AnimatedImage curFeature={item.id}>
        <Image source={item.featureImg} style={styles.topImg} />
      </AnimatedImage> */}
        {curFeature === 3 ? (
          <Animated.View>
            <View>
              <Animated.Image
                source={ExtraCard1}
                style={{
                  // top: 130,
                  // left: 70,
                  alignSelf: 'center',
                  position: 'absolute',
                  top: 100,
                  zIndex: 1,
                  opacity,
                }}
              />
              <Animated.Image
                source={ExtraCard3}
                style={{
                  position: 'absolute',
                  top: 100,
                  left: 0,
                  opacity,
                }}
              />
            </View>
            <Animated.Image
              source={ExtraCard2}
              style={{
                position: 'absolute',
                top: 0,
                // left: 100,
                alignSelf: 'flex-end',
                zIndex: 2,
                opacity,
              }}
            />
          </Animated.View>
        ) : (
          <Animated.Image
            source={item.featureImg}
            style={[
              styles.topImg,
              {
                opacity: opacity,
              },
            ]}
          />
        )}

        <Animated.View
          style={[
            styles.descriptionContainer,
            {
              opacity,
            },
          ]}
        >
          <Text
            style={[
              styles.descriptionHeadingText,
              styles.descriptionTexts,
              styles.largeText,
            ]}
          >
            {item.featureHeading}
          </Text>
          <Text style={[styles.descriptionMainText, styles.descriptionTexts]}>
            {item.featureDescription}
          </Text>
        </Animated.View>
      </View>
    );
  };

  const handleSnapToItem = (index: any) => {
    setCurFeature(index);
  };

  const handleMomentumScrollEnd = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);

    setCurFeature(index);
  };

  // Function to start automatic scrolling
  // const startAutomaticScrolling = () => {
  //   const intervalId = setInterval(() => {
  //     // Calculate the next item index
  //     const nextItemIndex = curFeature + 1;

  //     // Scroll to the next item
  //     flatListRef.current.scrollToIndex({
  //       index: nextItemIndex,
  //       animated: true,
  //     });

  //     // Update the curFeature state
  //     setCurFeature(nextItemIndex);
  //   }, 1500); // Adjust the interval duration as needed (e.g., 3000ms for 3 seconds)

  //   // Store the interval ID in state
  //   setScrollIntervalId(intervalId);
  // };

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={featuresData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment='center'
        bounces={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
      <LinearGradient
        colors={['#FF0000', '#F18403']} // Define the gradient colors
        start={{ x: 0, y: 0 }} // Start from the left (0, 0)
        end={{ x: 1, y: 0 }} // End at the right (1, 0)
        style={styles.descriptionContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            top: 32,
            alignSelf: 'center',
            gap: 4,
          }}
        >
          {featuresData.map((feature: any) => (
            <View
              key={feature.id}
              style={{
                backgroundColor:
                  feature.id === curFeature ? '#FFB129' : '#FDD590',
                width: feature.id === curFeature ? 32 : 16,
                height: 8,
                borderRadius: 20,
              }}
            ></View>
          ))}
        </View>
      </LinearGradient>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('LoginOptions')}
      >
        <Text style={[styles.largeText, styles.btnText]}>Start Banking</Text>
      </Pressable>
    </>
    // <View>
    //   <Text>Launch Screen</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  featureContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topImg: {
    // opacity: 0,
    width: '90%',
    height: '50%',
    alignSelf: 'center',
    objectFit: 'contain',
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,

    width: '100%',
    height: '45%',
    borderTopRightRadius: 100,
  },
  descriptionHeadingText: {
    top: 70,
  },
  largeText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  descriptionMainText: {
    width: '90%',
    alignSelf: 'center',

    top: 80,
    fontSize: 18,
    lineHeight: 24,
  },
  descriptionTexts: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btn: {
    position: 'absolute',

    bottom: 55,
    width: '70%',
    backgroundColor: '#ffffff',

    alignSelf: 'center',
    alignItems: 'center',

    borderRadius: 28,
    paddingVertical: 4.8,
  },
  btnText: {
    color: '#212121',
  },
});

export default LaunchMainScreen;
