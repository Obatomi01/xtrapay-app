import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

type MessageProps = {
  notificationDate: string;
  notificationTitle: string;
  notificationDescription: string;
  debit: boolean;
};

const ArrowUp = require('../../../assets/images/Arrow_Top.png');
const ArrowDown = require('../../../assets/images/Arrow_Bottom.png');

const MessageContainer = (props: MessageProps) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        elevation: 5,
        width: '90%',

        alignSelf: 'center',
        borderRadius: 15,
        paddingVertical: 24,
        paddingHorizontal: 16,

        marginVertical: 4.8,

        gap: 6.4,
      }}
    >
      <Text style={styles.regularText}>{props.notificationDate}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          alignItems: 'center',
        }}
      >
        <Text style={styles.mediumText}>{props.notificationTitle}</Text>
        <Image source={props.debit ? ArrowDown : ArrowUp} />
      </View>
      <Text style={styles.regularText}>{props.notificationDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  regularText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#828282',
  },
  mediumText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#363853',
  },
});

export default MessageContainer;
