import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';

import { useState } from 'react';

const Beneficiary_1 = require('../../../../assets/images/beneficiary_1.png');
const Beneficiary_2 = require('../../../../assets/images/beneficiary_2.png');
const Beneficiary_3 = require('../../../../assets/images/beneficiary_3.png');
const Beneficiary_4 = require('../../../../assets/images/beneficiary_4.png');
const Beneficiary_5 = require('../../../../assets/images/beneficiary_5.png');

type Props = {};

type BeneficiaryDetail = {
  customerName: string;
  customerImg: any;
};

const beneficiaries: BeneficiaryDetail[] = [
  {
    customerName: 'Okon Enefola',
    customerImg: Beneficiary_1,
  },
  {
    customerName: 'Faithful Enefola',
    customerImg: Beneficiary_2,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_3,
  },
  {
    customerName: 'Okon Ayoola',
    customerImg: Beneficiary_4,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_5,
  },
  {
    customerName: 'Okon Enefola',
    customerImg: Beneficiary_1,
  },
  {
    customerName: 'Faithful Enefola',
    customerImg: Beneficiary_5,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_2,
  },
  {
    customerName: 'Okon Ayoola',
    customerImg: Beneficiary_4,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_3,
  },
  {
    customerName: 'Okon Enefola',
    customerImg: Beneficiary_2,
  },
  {
    customerName: 'Faithful Enefola',
    customerImg: Beneficiary_5,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_4,
  },
  {
    customerName: 'Okon Ayoola',
    customerImg: Beneficiary_1,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_3,
  },
  {
    customerName: 'Okon Enefola',
    customerImg: Beneficiary_3,
  },
  {
    customerName: 'Faithful Enefola',
    customerImg: Beneficiary_1,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_5,
  },
  {
    customerName: 'Okon Ayoola',
    customerImg: Beneficiary_2,
  },
  {
    customerName: 'Micheal Enefola',
    customerImg: Beneficiary_1,
  },
];

const someBeneficiaries = beneficiaries.slice(0, 5);

const BeneficiaryContainer = (props: Props) => {
  const [showAllBeneficiaries, setShowAllBeneficiaries] = useState(false);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Medium',
          }}
        >
          Choose from Beneficiary
        </Text>
        <Pressable
          onPress={() => setShowAllBeneficiaries(!showAllBeneficiaries)}
        >
          <View
            style={{
              backgroundColor: '#FFE9D7',
              paddingVertical: 2.4,
              paddingHorizontal: 12,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                color: '#F18403',
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
              }}
            >
              {showAllBeneficiaries ? 'See Less' : 'See More'}
            </Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          flexWrap: 'wrap',
          rowGap: 12,
        }}
      >
        {(showAllBeneficiaries ? beneficiaries : someBeneficiaries).map(
          (beneficiary: BeneficiaryDetail, index: any) => (
            <View
              key={index}
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '18%',

                gap: 4.8,
              }}
            >
              <Image source={beneficiary.customerImg} />
              <Text
                style={{
                  color: '#212121',
                  fontSize: 10.97,
                  fontFamily: 'Poppins-Medium',
                  textAlign: 'center',
                }}
              >
                {beneficiary.customerName}
              </Text>
            </View>
          )
        )}
      </View>
    </View>
  );
};

export default BeneficiaryContainer;
