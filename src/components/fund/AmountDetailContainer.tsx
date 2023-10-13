import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
  children: any;
};

const AmountDetailContainer = (props: Props) => {
  return (
    <View
      style={[
        styles.mainContainer,
        styles.horizontalLine,
        {
          paddingVertical: 24,
        },
      ]}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  regularText: {
    color: '#212121',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
});

export default AmountDetailContainer;
