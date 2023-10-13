import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import InnerScreensHeader from '../../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../../components/general/InnerScreensContainer';
import AmountDetailContainer from '../../../components/fund/AmountDetailContainer';
import ProfileTopContainer from '../../../components/dashboard/ProfileTopContainer';

const ArrowRight = require('../../../../assets/images/Path.png');

type Props = {};

const ProfileSettingsScreen = (props: Props) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          height: 105,
        }}
      >
        <InnerScreensHeader pageTitle='Profile' longContents={true} />
      </View>
      <InnerScreensContainer>
        <ProfileTopContainer />

        <AmountDetailContainer>
          <Text style={styles.profileQuestion}>First Name</Text>
          <Text style={styles.profileAnswer}>Armstrong</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.profileQuestion}>Last Name</Text>
          <Text style={styles.profileAnswer}>Enefola</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.profileQuestion}>Date of birth</Text>
          <Text style={styles.profileAnswer}>23rd Oct, 1996</Text>
        </AmountDetailContainer>

        <AmountDetailContainer>
          <Text style={styles.profileQuestion}>Username</Text>
          <Pressable>
            <Text style={styles.profileAnswer}>@armstrongenefola 1</Text>
          </Pressable>
        </AmountDetailContainer>
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileQuestion: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
  profileAnswer: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#212121',
  },
});

export default ProfileSettingsScreen;
