import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  time: string;
  amount: string;
  date: string;
  iconColor: string;
  iconImg: any;
  debit: boolean;
};

const TransactionDetail = (props: Props) => {
  return (
    <View style={styles.transactionContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <View
          style={{
            backgroundColor: props.iconColor,
            //   padding: 18,
            height: 52,
            width: 52,

            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.iconImg}
        </View>

        <View style={styles.transactionDetailContainer}>
          <Text style={[styles.transactionTitle, styles.largeText]}>
            {props.title}
          </Text>
          <Text style={styles.smallText}>{props.time}</Text>
        </View>
      </View>

      <View
        style={[
          styles.transactionDetailContainer,
          {
            alignItems: 'flex-end',
          },
        ]}
      >
        <Text
          style={[
            styles.transactionTitle,
            styles.largeText,
            props.debit ? styles.debit : styles.credit,
          ]}
        >
          {props.amount}
        </Text>
        <Text style={styles.smallText}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 12,

    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDetailContainer: {
    gap: 4,
  },
  transactionTitle: {
    color: '#212121',
  },
  debit: {
    color: '#FF0000',
  },
  credit: {
    color: '#11D100',
  },
  largeText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  smallText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
});

export default TransactionDetail;
