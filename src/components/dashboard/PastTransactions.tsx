import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import TransactionDetail from './transactions/TransactionDetail';

type Props = {};

type PastTransactionDetail = {
  title: string;
  time: string;
  amount: string;
  date: string;
  iconColor: string;
  iconImg: any;
  debit: boolean;
};

const TransferIcon = require('../../../assets/images/transfer-transaction.png');
const WalletFund = require('../../../assets/images/wallet_fund.png');

const pastTransactionsDetails: PastTransactionDetail[] = [
  {
    title: 'Airtel',
    time: '12:19PM',
    amount: '- #70,000',
    date: '2 Feb 2022',
    debit: true,
    iconColor: '#FF0000',
    iconImg: (
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
        }}
      >
        Airtel
      </Text>
    ),
  },
  {
    title: 'Transfer',
    time: '1:10PM',
    amount: '- #2,000',
    date: '2 Feb 2022',
    debit: true,
    iconColor: '#179EFF',
    iconImg: <Image source={TransferIcon} />,
  },
  {
    title: 'Wallet Fund',
    time: '12:19PM',
    amount: '+ #90,000',
    date: '2 Feb 2022',
    debit: false,
    iconColor: '#FFEE54',
    iconImg: <Image source={WalletFund} />,
  },
];

const PastTransactions = (props: Props) => {
  return (
    <View>
      {pastTransactionsDetails.map(
        (detail: PastTransactionDetail, index: any) => (
          <TransactionDetail
            key={index}
            title={detail.title}
            time={detail.time}
            amount={detail.amount}
            date={detail.date}
            iconImg={detail.iconImg}
            debit={detail.debit}
            iconColor={detail.iconColor}
          />
        )
      )}
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

export default PastTransactions;
