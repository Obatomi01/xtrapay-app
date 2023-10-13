import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';
import TransactionDetail from '../../components/dashboard/transactions/TransactionDetail';

const Abosede = require('../../../assets/images/abosede_thankgod.png');
const Health = require('../../../assets/images/health_black.png');
const Card = require('../../../assets/images/cards_black_icon.png');
const Wallet = require('../../../assets/images/wallet_fund.png');

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

const transactionHistory: PastTransactionDetail[] = [
  {
    title: 'Airtel',
    time: '12:19PM',
    amount: '- #70,000',
    date: '2 Oct 2022',
    debit: true,
    iconColor: '#FF0000',
    iconImg: (
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          color: '#fff',
        }}
      >
        Airtel
      </Text>
    ),
  },

  {
    title: 'Abdul Acquar',
    time: '1:10PM',
    amount: '- #2,000',
    date: '2 Feb 2022',
    debit: true,
    iconColor: '#212121',
    iconImg: (
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Roboto-Bold',
          color: '#fff',
        }}
      >
        AB
      </Text>
    ),
  },
  {
    title: 'Card Fund',
    time: '12:19PM',
    amount: '- #13,500',
    date: '20 May 2022',
    debit: true,
    iconColor: '#FF6D6D',
    iconImg: <Image source={Card} />,
  },
  {
    title: 'Wallet Fund',
    time: '15:19PM',
    amount: '+ #190,000',
    date: '22 March 2023',
    debit: false,
    iconColor: '#FFEE54',
    iconImg: <Image source={Wallet} />,
  },
  {
    title: 'Wallet Fund',
    time: '12:19PM',
    amount: '+ #10,000',
    date: '2 Feb 2022',
    debit: false,
    iconColor: '#FFEE54',
    iconImg: <Image source={Wallet} />,
  },
  {
    title: 'Card Fund',
    time: '08:19AM',
    amount: '- #200,000',
    date: '12 Dec 2022',
    debit: true,
    iconColor: '#FF6D6D',
    iconImg: <Image source={Card} />,
  },
  {
    title: 'Medicine',
    time: '13:29PM',
    amount: '+ #5,000',
    date: '12 Jan 2022',
    debit: false,
    iconColor: '#77FF6B',
    iconImg: <Image source={Health} />,
  },
  {
    title: 'DSTV',
    time: '12:19PM',
    amount: '+ #300,000',
    date: '2 Feb 2022',
    debit: false,
    iconColor: '#010AEE',
    iconImg: (
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Roboto-Bold',
          color: '#fff',
        }}
      >
        Dstv
      </Text>
    ),
  },
  {
    title: 'Thankgod Abosede',
    time: '12:19PM',
    amount: '- #30,000',
    date: '2 Feb 2022',
    debit: true,
    iconColor: '#fff',
    iconImg: <Image source={Abosede} />,
  },
  {
    title: 'Card Fund',
    time: '08:19AM',
    amount: '- #200,000',
    date: '12 Dec 2022',
    debit: true,
    iconColor: '#FF6D6D',
    iconImg: <Image source={Card} />,
  },
  {
    title: 'Medicine',
    time: '13:29PM',
    amount: '+ #5,000',
    date: '12 Jan 2022',
    debit: false,
    iconColor: '#77FF6B',
    iconImg: <Image source={Health} />,
  },
];

const TransactionHistoryScreen = (props: Props) => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          height: 105,
        }}
      >
        <InnerScreensHeader
          pageTitle='Transaction History'
          longContents={true}
        />
      </View>
      <InnerScreensContainer>
        <View>
          {transactionHistory.map(
            (historyDetail: PastTransactionDetail, index: any) => (
              <TransactionDetail
                key={index}
                title={historyDetail.title}
                time={historyDetail.time}
                amount={historyDetail.amount}
                date={historyDetail.date}
                iconColor={historyDetail.iconColor}
                iconImg={historyDetail.iconImg}
                debit={historyDetail.debit}
              />
            )
          )}
        </View>
      </InnerScreensContainer>
    </ScrollView>
  );
};

export default TransactionHistoryScreen;
