import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  Alert,
  Modal,
  Platform,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLanguage,
  toggleToArabic,
  toggleToEnglish,
} from '../store/languageSlice';

// import {
//   check,
//   request,
//   PERMISSIONS,
//   RESULTS,
//   openSettings,
// } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';

function HomeHeading() {
  const { width } = Dimensions.get('window');

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation=useNavigation()
  const language = useSelector(selectLanguage);
  const isArabic = language === 'Arabic';


  // const requestLocationPermission = async () => {
  //   try {
  //     const permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
        

  //     const status = await check(permission);

  //     if (status === RESULTS.GRANTED) {
  //       Alert.alert('Location', 'Permission already granted');
  //       return;
  //     }

  //     if (status === RESULTS.BLOCKED) {
  //       Alert.alert(
  //         'Location Permission Required',
  //         'Location permission was denied earlier. Please enable it from settings.',
  //         [
  //           { text: 'Cancel', style: 'cancel' },
  //           {
  //             text: 'Open Settings',
  //             onPress: () => openSettings(),
  //           },
  //         ],
  //       );
  //       return;
  //     }

  //     
  //     const result = await request(permission);

  //     if (result === RESULTS.GRANTED) {
  //       Alert.alert('Location', 'Permission granted successfully');
  //     } else {
  //       
  //       Alert.alert(
  //         'Location Permission Required',
  //         'Location permission was denied. Please enable it from settings.',
  //         [
  //           { text: 'Cancel', style: 'cancel' },
  //           {
  //             text: 'Open Settings',
  //             onPress: () => openSettings(),
  //           },
  //         ],
  //       );
  //     }
  //   } catch (error) {
  //     console.log('Permission error:', error);
  //   }
  // };

  const setLanguageHandler = (lang) => {
    if (lang === 'English') dispatch(toggleToEnglish());
    else dispatch(toggleToArabic());
    setModalVisible(false);
  };

  return (
    <>
      <View style={isArabic ? styles.mainContainerArabic : styles.mainContainer}>
        {/* LEFT */}
        <View style={styles.leftContainer}>
          <View style={isArabic ? styles.titleArabic : styles.title}>
            <Image
              source={require('../../assets/homeicon2.png')}
              style={styles.logo}
            />
            <Text style={{ fontSize: width * 0.05 }}>
              {isArabic ? 'ارناكولام' : 'Ernakulam'}
            </Text>
          </View>

          <Text
            style={isArabic ? styles.descriptionArabic : styles.description}
            numberOfLines={1}
          >
            {isArabic
              ? ' بالسعادة، ولكن بفضل هؤلاء لا يدركون بأن'
              : 'Lorem ipsum dolor sit amet'}
          </Text>
        </View>

        {/* RIGHT */}
        <View
          style={isArabic ? styles.rightSideLogoArabi : styles.rightSideLogo}
        >
          <Pressable
            style={styles.iconButton}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={require('../../assets/languageicon.png')}
              style={styles.icon}
            />
          </Pressable>

          <Pressable
            style={styles.iconButton}
            onPress={()=>{
              navigation.navigate('Location')
            }}
          >
            <Image
              source={require('../../assets/wallet.png')}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>

      {/* LANGUAGE MODAL */}
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Modal transparent visible={modalVisible} animationType="fade">
            <View style={styles.blurOverlay} />
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Change App Language?</Text>

                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <Pressable
                    style={styles.buttonClose}
                    onPress={() => setLanguageHandler('English')}
                  >
                    <Text style={styles.textStyle}>English</Text>
                  </Pressable>

                  <Pressable
                    style={styles.buttonClose}
                    onPress={() => setLanguageHandler('Arabic')}
                  >
                    <Text style={styles.textStyle}>Arabic</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

export default HomeHeading;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 20,
  },
  mainContainerArabic: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 20,
  },
  leftContainer: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
  },
  titleArabic: {
    flexDirection: 'row-reverse',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  description: {
    color: '#555',
  },
  descriptionArabic: {
    color: '#555',
    textAlign: 'right',
  },
  rightSideLogo: {
    flexDirection: 'row',
    gap: 8,
  },
  rightSideLogoArabi: {
    flexDirection: 'row-reverse',
    gap: 8,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
