import React, { useEffect } from 'react';
import { View, Image, Dimensions, Platform, StyleSheet } from 'react-native';

const HomeBanner = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={{ padding: width * 0.05 }}>
      <Image
        style={{ width: width * 0.9, borderRadius: 30 }}
        source={require('../../assets/homebanner.png')}
      ></Image>
    </View>
  );
};

export default HomeBanner;
