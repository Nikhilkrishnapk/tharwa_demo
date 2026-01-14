import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { Text } from '@react-navigation/elements';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';

function MyTabBar({ state, navigation }: any) {
  const { height, width } = Dimensions.get('window');
  //  dynamic styling for the bottom nav bar
  const FONT_SIZE = width * 0.03;
  const LABEL_HEIGHT = FONT_SIZE * 1.4;

  // getting language from store.
  const language = useSelector(selectLanguage);
  const isArabic = language === 'Arabic';

  return (
    <View style={isArabic ? styles.containerArabic : styles.container}>
      {state.routes.map((item: any, index: number) => {
        let tabName = '';
        let tabIcon: any = null;

        const isFocused = state.index === index;

        if (item.name === 'HomeView') {
          tabName = isArabic ? 'بيت' : 'HOME';
          tabIcon = require('../../assets/homeicon1.png');
        } else if (item.name === 'AddressBook') {
          tabName = '';
          tabIcon = require('../../assets/addressbook.png');
        } else if (item.name === 'ProfileView') {
          tabName = isArabic ? 'حساب تعريفي' : 'PROFILE';
          tabIcon = require('../../assets/profileicon.png');
        }

        if (!tabIcon) return null;

        return (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate(item.name)}
            style={styles.tabItem}
          >
            <Image source={tabIcon} style={styles.icon} />

            <View style={[styles.labelContainer, { height: LABEL_HEIGHT }]}>
              {tabName !== '' && (
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: FONT_SIZE,
                    color: isFocused ? 'white' : 'gray',
                  }}
                >
                  {tabName}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    height: 70,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 22,
    height: 22,
  },
  labelContainer: {
    justifyContent: 'center',
    marginTop: 4,
  },

  ///////////////////////////////////////////
  /////STYLE, BASED ON LANGUAGE {ARABIC}/////
  ///////////////////////////////////////////

  containerArabic: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    height: 70,
  },
});

export default MyTabBar;
