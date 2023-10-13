import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const Airtime = require('../../../assets/images/airtime.png');
const Data = require('../../../assets/images/data.png');
const Electricity = require('../../../assets/images/electricity.png');
const Transfer = require('../../../assets/images/transfer.png');
const Loans = require('../../../assets/images/loans.png');
const Agent = require('../../../assets/images/locate_agents.png');
const School = require('../../../assets/images/community-fill.png');
const Royalties = require('../../../assets/images/vip-crown-fill.png');
const Health = require('../../../assets/images/health.png');

const ArrowDown = require('../../../assets/images/arrow-down-s-line.png');

type TransactionOption = {
  title: string;
  iconImg: any;
  linkPath: string;
};

const transactionOptions = [
  {
    title: 'Airtime',
    iconImg: Airtime,
    linkPath: 'Airtime',
  },
  {
    title: 'Transfer',
    iconImg: Transfer,
    linkPath: 'TransferMain',
  },
  {
    title: 'Electricity',
    iconImg: Electricity,
    linkPath: 'Transfer',
  },
  {
    title: 'Data',
    iconImg: Data,
    linkPath: 'Transfer',
  },
  {
    title: 'Royalties',
    iconImg: Royalties,
    linkPath: 'Transfer',
  },
  {
    title: 'Health',
    iconImg: Health,
    linkPath: 'Transfer',
  },
  {
    title: 'Locate Agents',
    iconImg: Agent,
    linkPath: 'Transfer',
  },
  {
    title: 'Pay School Fees',
    iconImg: School,
    linkPath: 'Transfer',
  },
  {
    title: 'Loans',
    iconImg: Loans,
    linkPath: 'Transfer',
  },
];

const PossibleTransactions = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.transactionsContainer}>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          width: '86%',

          rowGap: 8,
        }}
      >
        {transactionOptions.map((option: TransactionOption, index: any) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate(option.linkPath)}
          >
            <View style={styles.transactionContainer}>
              <Image source={option.iconImg} />
              <Text style={styles.transactionText}>{option.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View
        style={{
          marginTop: 12,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4.8,
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Regular',
          }}
        >
          See more
        </Text>
        <Image source={ArrowDown} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsContainer: {
    marginTop: 12,

    width: '94%',

    backgroundColor: '#fff',
    alignSelf: 'center',

    paddingVertical: 24,

    elevation: 15,
  },
  transactionContainer: {
    elevation: 4,

    // padding: 12,
    borderRadius: 6,

    width: 96,
    height: 100,

    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,

    paddingVertical: 26,
  },
  transactionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    width: '95%',
    top: 0,
  },
});

export default PossibleTransactions;
