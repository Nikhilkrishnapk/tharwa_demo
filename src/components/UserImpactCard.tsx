import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';

const { width } = Dimensions.get('window');

const ContributionCard = () => {
  const language = useSelector(selectLanguage);
  const isArabic = language === 'Arabic';
  return (
    <View style={styles.container}>
      <View style={isArabic ? styles.cardArabic : styles.card}>
        {/* Left content */}
        <View>
          <View
            style={
              isArabic
                ? styles.valueTextContainerArabic
                : styles.valueTextContainer
            }
          >
            <Text style={styles.valueText}>300.00</Text>
            <Text style={styles.unitText}>{isArabic ? ' كجم' : 'kg'}</Text>
          </View>
          <Text style={isArabic ? styles.subTextArabic : styles.subText}>
            {isArabic ? 'مساهمتك' : 'Your Contribution'}
          </Text>
        </View>

        {/* Right coin section */}
        <View style={styles.rightSecContainer}>
          <View style={styles.coinPill}>
            <Image
              source={require('../../assets/earned-coin.png')}
              style={styles.coinIcon}
            />
            <Text style={styles.coinText}>150</Text>
          </View>
          <Text style={styles.rightSubText}>
            {isArabic ? 'العملة المكتسبة' : 'Earned Coin'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  card: {
    width: width * 0.92,
    height: width * 0.28,
    backgroundColor: '#000',
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  valueTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '3',
  },

  valueText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  unitText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },

  subText: {
    marginTop: 6,
    fontSize: 16,
    color: '#8E8E8E',
  },

  coinPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 40,
  },

  coinIcon: {
    width: 26,
    height: 26,
    marginRight: 8,
    resizeMode: 'contain',
  },

  coinText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4CD964',
  },

  rightSubText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },

  rightSecContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///////////////////////////////////////////
  /////STYLE, BASED ON LANGUAGE {ARABIC}/////
  ///////////////////////////////////////////

  cardArabic: {
    width: width * 0.92,
    height: width * 0.28,
    backgroundColor: '#000',
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row-reverse', // changes
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  valueTextContainerArabic: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: '3',
  },

  subTextArabic: {
    textAlign: 'right',
    marginTop: 6,
    fontSize: 16,
    color: '#8E8E8E',
  },
});

export default ContributionCard;
