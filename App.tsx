/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux'; /* Redux toolkit imported */
import { store } from './src/store/store.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homeview from './src/Homeview';
import MyTabBar from './src/components/MyTabBar';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from './src/components/BottomNavigator';
import GeoLocationScreen from './src/components/GeoLocationScreen';




const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {/* <AppContent /> */}

          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="BottomNavigator"
                component={BottomNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Homeview}
                options={{ headerShown: false }}
              />
                    <Stack.Screen
                name="Location"
                component={GeoLocationScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
