import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';

const ServiceItems = ({ title, icon }) => {
  const { width, height } = Dimensions.get('window');

  // find language from store.
  const language = useSelector(selectLanguage);
  const isArabic = language === 'Arabic';

  return (
    <View style={[styles.item, { width: width * 0.43, height: width * 0.43 }]}>
      <Text
        style={isArabic ? styles.titleArabic : styles.title}
        numberOfLines={2}
      >
        {title}
      </Text>
      <View style={styles.imgContainer}>
        <Image style={styles.img} resizeMode="contain" source={{ uri: icon }} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 18,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 8,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    height: 48,
    lineHeight: 24,
  },

  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
    marginRight: -50,
  },

  img: {
    width: '80%',
    height: '80%',
  },

  ///////////////////////////////////////////
  /////STYLE, BASED ON LANGUAGE {ARABIC}/////
  ///////////////////////////////////////////

  titleArabic: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    height: 48,
    lineHeight: 24,
    textAlign: 'right',
  },
});

export default ServiceItems;
