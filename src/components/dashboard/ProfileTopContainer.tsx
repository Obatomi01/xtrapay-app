import { View, Text, Image } from 'react-native';
import React from 'react';

const ProfilePicture = require('../../../assets/images/rounded_profile_picture.png');
const UploadIcon = require('../../../assets/images/image-add-line.png');

type Props = {};

const ProfileTopContainer = (props: Props) => {
  return (
    <View>
      <Image
        source={ProfilePicture}
        style={{
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: '#C4C4C4',
          borderRadius: 10,

          width: '40%',
          alignSelf: 'center',

          paddingVertical: 8,
          paddingHorizontal: 24,
          marginBottom: 14,
          marginTop: 8,

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image source={UploadIcon} />
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 14,
            color: '#C4C4C4',
          }}
        >
          Upload
        </Text>
      </View>
    </View>
  );
};

export default ProfileTopContainer;
