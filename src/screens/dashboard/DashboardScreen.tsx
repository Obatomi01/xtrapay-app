import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
  FlatList,
  Animated,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from 'react';

import DashboardHeader from '../../components/general/DashboardHeader';
import LinearGradientBtn from '../../components/general/LinearGradientBtn';
import PossibleTransactions from '../../components/dashboard/PossibleTransactions';
import PastTransactions from '../../components/dashboard/PastTransactions';
import MenuBar from '../../components/dashboard/MenuBar';

import { BlurView } from '@react-native-community/blur';

const MenuIcon = require('../../../assets/images/Group_55773.png');
const NotificationIcon = require('../../../assets/images/notification.png');

const Card1 = require('../../../assets/images/xtracard_1.png');
const Card2 = require('../../../assets/images/Master_Card.png');
const Card3 = require('../../../assets/images/Frame_123.png');

const InfoIcon = require('../../../assets/images/information-line.png');
const ArrowIcon = require('../../../assets/images/lf20_3lrvgesy.json].png');
const Ellipse_102 = require('../../../assets/images/Ellipse_102.png');

const ArrowRight = require('../../../assets/images/Path.png');

const OrangeShadow = require('../../../assets/images/orange-shadow.png');
const News_1 = require('../../../assets/images/unsplash_mfIfEqt3bAM.png');

const cardsSlide = [
  {
    img: Card1,
    id: '1',
  },
  {
    img: Card2,
    id: '2',
  },
  {
    img: Card3,
    id: '3',
  },
];

function DashboardScreen() {
  const positionX = new Animated.Value(-300);
  const navigation = useNavigation<any>();

  const [showMenuBar, setShowMenuBar] = useState(false);

  Animated.timing(positionX, {
    useNativeDriver: true,
    toValue: 0,
    duration: 1000,
  }).start();

  const renderItem = ({ item }: any) => (
    <Image
      source={item.img}
      style={{
        resizeMode: 'contain',
        width: 320,
      }}
    />
  );

  return (
    <View>
      {showMenuBar && (
        <Animated.View
          style={{
            width: '100%',
            position: 'absolute',
            transform: [{ translateX: positionX }],
            zIndex: 5,
            flex: 1,
            height: '100%',
          }}
        >
          <View
            style={{
              width: '70%',
              position: 'absolute',
              zIndex: 12,
              flex: 1,
              height: '100%',
            }}
          >
            <MenuBar onClickLink={() => setShowMenuBar(false)} />
          </View>

          <Pressable
            style={{
              width: '100%',
              height: '100%',
            }}
            onPress={() => {
              setShowMenuBar(false);
            }}
          >
            <BlurView
              style={styles.absolute}
              blurType='dark'
              blurAmount={1}
              reducedTransparencyFallbackColor='white'
            />
          </Pressable>
        </Animated.View>
      )}

      <ScrollView>
        <DashboardHeader />

        <View
          style={{
            paddingVertical:
              StatusBar.currentHeight && StatusBar.currentHeight * 1.2,
          }}
        >
          <View
            style={[
              styles.topBtnsContainer,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}
          >
            <Pressable
              onPress={() => {
                setShowMenuBar(true);
              }}
            >
              <Image
                source={MenuIcon}
                style={{
                  width: 48,
                  height: 24,
                  resizeMode: 'contain',
                }}
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Notifications')}>
              <View
                style={{
                  backgroundColor: '#F5480133',
                  borderRadius: 80,
                  padding: 4.8,
                }}
              >
                <Image source={NotificationIcon} />
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#F18403',
                    height: 16,
                    width: 16,

                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    right: 5,
                    top: 5,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 9,
                      fontFamily: 'Poppins-Medium',
                    }}
                  >
                    3
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>

          <View style={styles.mainContainer}>
            <Text
              style={[
                styles.boldText,
                {
                  color: '#fff',
                  fontSize: 24,
                  width: '90%',
                },
              ]}
            >
              Good Morning Armstrong
            </Text>
          </View>

          <FlatList
            data={cardsSlide}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View
            style={[
              styles.mainContainer,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}
          >
            <View
              style={{
                width: '45%',
              }}
            >
              <LinearGradientBtn
                onButtonPressed={() => navigation.navigate('FundMain')}
                btnText='Fund'
                textSize={16}
                textFamily='Poppins-Bold'
              />
            </View>
            <Pressable
              style={{
                width: '45%',
              }}
              onPress={() => navigation.navigate('WithdrawMain')}
            >
              <View
                style={{
                  borderColor: '#FB1F0A',
                  borderWidth: 1,
                  paddingVertical: 12,

                  width: '100%',
                  borderRadius: 28,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#FB1F0A',
                    fontSize: 16,
                    fontFamily: 'Poppins-Bold',
                  }}
                >
                  Withdraw
                </Text>
              </View>
            </Pressable>
          </View>

          <View
            style={[
              styles.mainContainer,
              {
                marginTop: 48,
              },
            ]}
          >
            <Text style={styles.semiBoldText}>Quick actions</Text>
          </View>

          <Pressable
            style={[
              styles.mainContainer,
              {
                backgroundColor: '#FFC700',
                flexDirection: 'row',
                padding: 12,
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}
            onPress={() => navigation.navigate('KYCUpgrade')}
          >
            <Image source={InfoIcon} />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
              }}
            >
              Complete your registration
            </Text>
            <Image source={ArrowIcon} />
          </Pressable>

          <PossibleTransactions />

          <View
            style={{
              position: 'relative',
            }}
          >
            <View
              style={[
                styles.mainContainer,
                {
                  marginTop: 48,
                  padding: 16,

                  borderRadius: 16,
                  backgroundColor: '#fff',
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                }}
              >
                Based on your activity, you have accumulated
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 14,
                  }}
                >
                  {' '}
                  40 Xpoints
                </Text>{' '}
                so far.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.linkText}>learn more</Text>
                <Image source={Ellipse_102} />
              </View>
            </View>
            <Image
              source={OrangeShadow}
              style={{
                position: 'absolute',
                bottom: -65,
                zIndex: -1,
              }}
            />
          </View>

          <View
            style={[
              styles.mainContainer,
              {
                marginTop: 48,
              },
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.semiBoldText}>Transactions</Text>

              <Pressable
                onPress={() => navigation.navigate('TransactionHistory')}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 12,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 14,
                    }}
                  >
                    See all
                  </Text>
                  <Image source={ArrowRight} />
                </View>
              </Pressable>
            </View>
          </View>

          <PastTransactions />

          <View
            style={[
              styles.mainContainer,
              {
                marginTop: 48,
              },
            ]}
          >
            <Text style={styles.semiBoldText}>News and Promo</Text>
          </View>

          <View
            style={{
              position: 'relative',
            }}
          >
            <View
              style={[
                styles.mainContainer,
                {
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                },
              ]}
            >
              <Image
                source={News_1}
                style={{
                  resizeMode: 'cover',
                  width: '100%',
                  // height: '100%',
                }}
              />

              <View
                style={{
                  padding: 6.4,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Bold',
                    color: '#1C1939',
                  }}
                >
                  Invite your friends!
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    color: '#1C1939',
                    width: '70%',
                    marginBottom: 12,
                  }}
                >
                  For every user you invite and signs up, you can earn up N500.
                </Text>

                <Text style={styles.linkText}>learn More</Text>
              </View>
            </View>

            <Image
              source={OrangeShadow}
              style={{
                position: 'absolute',
                bottom: -50,

                zIndex: -1,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    zIndex: 6,
  },
  topBtnsContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  boldText: {
    fontFamily: 'Poppins-SemiBold',
  },
  semiBoldText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#212121',
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',

    marginTop: 18,
  },
  linkText: {
    textDecorationLine: 'underline',
    textDecorationColor: '#F18403',
    textDecorationStyle: 'solid',
    color: '#F18403',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default DashboardScreen;
