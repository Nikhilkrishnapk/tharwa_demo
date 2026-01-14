import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  Text,
  Alert,
  Platform,
  Linking,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import HomeHeading from './components/HomeHeading';
import HomeBanner from './components/HomeBanner';
import UserImpactCard from './components/UserImpactCard';
import ServicesOptions from './components/ServicesOptions';
import AboutSection from './components/AboutSection';

import Geolocation from '@react-native-community/geolocation';


const { height } = Dimensions.get('window');

const HomeView = () => {









  // 🔹 Reanimated overlay
  const overlayHeight = useSharedValue(0);
  const overlayOpacity = useSharedValue(0);

  const openBox = () => {
    overlayHeight.value = withTiming(height * 0.8, { duration: 300 });
    overlayOpacity.value = withTiming(1, { duration: 200 });
  };

  const closeBox = () => {
    overlayHeight.value = withTiming(0, { duration: 300 });
    overlayOpacity.value = withTiming(0, { duration: 200 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: overlayHeight.value,
    opacity: overlayOpacity.value,
  }));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <HomeHeading />
        <UserImpactCard />
        <HomeBanner />
        <ServicesOptions />
      </ScrollView>

      <AboutSection onOpenModal={openBox} />

      <Animated.View style={[styles.overlay, animatedStyle]}>
        <Pressable onPress={closeBox} style={styles.closeButton}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>

        <View style={styles.content}>
          <Text style={styles.title}>Expanded Box</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptatum error eos, ipsa sequi excepturi!
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 100,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 101,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  subtitle: {
    color: '#fff',
    marginTop: 8,
    fontSize: 16,
  },
});


// sample change for testing git