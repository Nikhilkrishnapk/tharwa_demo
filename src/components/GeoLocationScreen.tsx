import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import {
  isLocationEnabled,
  promptForEnableLocationIfNeeded,
} from 'react-native-android-location-enabler';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

const GeoLocationScreen = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  // Requesting Location for the app
  const requestLocationPermission = async () => {
    try {
      const permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const status = await check(permission);
      console.log(status);

      if (status === RESULTS.GRANTED) {
        return checkGPS();
      }

      // check the condition when denied
      if (status === RESULTS.DENIED) {
        const result = await request(permission);

        // this condition is used for ::: initially the status is denied then we select allow access at the time the result is set as granted at that time check the gps is on or off.
        if (result === RESULTS.GRANTED) {
          return checkGPS();
        }
        Alert.alert(
          'Location is blocked',
          'Enable location permission from settings',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => openSettings() },
          ],
        );
      }

      if (status === RESULTS.BLOCKED) {
        Alert.alert(
          'Location is blocked',
          'Enable location permission from settings',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => openSettings() },
          ],
        );
      }
    } catch (error) {
      console.log('Permission error:', error);
    }
  };

  // fuction for checking the device location / GPS is turned OFF or turned ON.
  const checkGPS = async () => {
    console.log('entered the funcion for check the loction is on or off');
    if (Platform.OS === 'android') {
      try {
        const checkEnabled: boolean = await isLocationEnabled();
        console.log('checkEnabled', checkEnabled);

        const enableResult = await promptForEnableLocationIfNeeded();
        console.log('enableResult', enableResult);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    }
  };


  return (
    <View>
      <Text style={{textAlign:'center', marginTop:300, fontWeight: 900, fontSize: 30}}>Location permissions</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
});
export default GeoLocationScreen;
