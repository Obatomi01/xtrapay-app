import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import InnerScreensHeader from '../../components/general/InnerScreensHeader';
import InnerScreensContainer from '../../components/general/InnerScreensContainer';
import MessageContainer from '../../components/notifications/MessageContainer';

type Props = {};

type NotificationDetail = {
  notificationDate: string;
  notificationTitle: string;
  notificationDescription: string;
  debit: boolean;
};

const transactionHistories: NotificationDetail[] = [
  {
    notificationDate: '29 Feb. 2023, 7.14 PM',
    debit: false,
    notificationDescription: 'Pay debt',
    notificationTitle: 'You received N100,000 from Junior Obama',
  },
  {
    notificationDate: '15 Mar. 2023, 3.30 PM',
    debit: true,
    notificationDescription: 'Groceries',
    notificationTitle: 'N10,000 spent at Grocery Store',
  },
  {
    notificationDate: '25 Apr. 2023, 9.45 AM',
    debit: true,
    notificationDescription: 'Utilities',
    notificationTitle: 'N5,000 paid for Utilities',
  },
  {
    notificationDate: '01 Oct. 2023, 12.20 PM',
    debit: false,
    notificationDescription: 'Salary',
    notificationTitle: 'You received N50,000 as Salary',
  },
  {
    notificationDate: '18 Jun. 2023, 6.05 PM',
    debit: true,
    notificationDescription: 'Dinner',
    notificationTitle: 'N2,500 spent on Dinner',
  },
  {
    notificationDate: '25 Sep. 2023, 10.15 AM',
    debit: false,
    notificationDescription: 'Gift',
    notificationTitle: 'You received N1,000 as a Gift',
  },
  {
    notificationDate: '28 Sep. 2023, 2.30 PM',
    debit: true,
    notificationDescription: 'Shopping',
    notificationTitle: 'N8,000 spent on Shopping',
  },
  {
    notificationDate: '08 Oct. 2023, 8.55 AM',
    debit: false,
    notificationDescription: 'Refund',
    notificationTitle: 'You received N3,500 as a Refund',
  },
  {
    notificationDate: '09 Oct. 2023, 5.40 PM',
    debit: true,
    notificationDescription: 'Movie Tickets',
    notificationTitle: 'N1,200 spent on Movie Tickets',
  },
];

const NotificationScreen = (props: Props) => {
  const curDate = new Date();

  const convertToMonthNumber = (month: any) => {
    const monthMap: any = {
      'Jan.': 0,
      'Feb.': 1,
      'Mar.': 2,
      'Apr.': 3,
      May: 4,
      'Jun.': 5,
      'Jul.': 6,
      'Aug.': 7,
      'Sep.': 8,
      'Oct.': 9,
      'Nov.': 10,
      'Dec.': 11,
    };

    return monthMap[month] + 1;
  };

  const getTimeDifference = (historyData: any) => {
    const [day, month, year] = historyData.notificationDate.split(' ');
    const formattedYear = year.replace(',', '');
    const formattedMonth = convertToMonthNumber(month);

    const givenDate = new Date(`${formattedYear}-${formattedMonth}-${day}`);

    const timeDifference = curDate.getTime() - givenDate.getTime();

    // Convert the time difference to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

    return daysDifference;
  };

  const newTransactions = transactionHistories.filter(
    (historyDetail: NotificationDetail) => {
      const daysDifference = getTimeDifference(historyDetail);
      return daysDifference < 7;
    }
  );

  const recentTransactions = transactionHistories.filter(
    (historyDetail: NotificationDetail) => {
      const daysDifference = getTimeDifference(historyDetail);
      return daysDifference > 7 && daysDifference < 30;
    }
  );

  const otherTransactions = transactionHistories.filter(
    (historyDetail: NotificationDetail) => {
      const daysDifference = getTimeDifference(historyDetail);
      return daysDifference > 30;
    }
  );

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          height: 95,
        }}
      >
        <InnerScreensHeader pageTitle='Notifications' longContents={true} />
      </View>

      <InnerScreensContainer>
        {newTransactions.length > 0 && (
          <View>
            <View style={styles.mainContainer}>
              <Text style={styles.mediumText}>New</Text>
            </View>
            {newTransactions.map(
              (historyDetail: NotificationDetail, index: any) => (
                <MessageContainer
                  key={index}
                  notificationDate={historyDetail.notificationDate}
                  notificationDescription={
                    historyDetail.notificationDescription
                  }
                  notificationTitle={historyDetail.notificationTitle}
                  debit={historyDetail.debit}
                />
              )
            )}
          </View>
        )}
        {recentTransactions.length > 0 && (
          <View>
            <View style={styles.mainContainer}>
              <Text style={styles.mediumText}>Recent</Text>
            </View>
            {recentTransactions.map(
              (historyDetail: NotificationDetail, index: any) => (
                <MessageContainer
                  key={index}
                  notificationDate={historyDetail.notificationDate}
                  notificationDescription={
                    historyDetail.notificationDescription
                  }
                  notificationTitle={historyDetail.notificationTitle}
                  debit={historyDetail.debit}
                />
              )
            )}
          </View>
        )}
        {otherTransactions.length > 0 && (
          <View>
            <View style={styles.mainContainer}>
              <Text style={styles.mediumText}>Others</Text>
            </View>
            {otherTransactions.map(
              (historyDetail: NotificationDetail, index: any) => (
                <MessageContainer
                  key={index}
                  notificationDate={historyDetail.notificationDate}
                  notificationDescription={
                    historyDetail.notificationDescription
                  }
                  notificationTitle={historyDetail.notificationTitle}
                  debit={historyDetail.debit}
                />
              )
            )}
          </View>
        )}
      </InnerScreensContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  mediumText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginTop: 24,
  },
});

export default NotificationScreen;
