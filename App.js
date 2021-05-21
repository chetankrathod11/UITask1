import React from 'react';
import {
  StyleSheet,
  StatusBar,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Body from './components/Body';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <Body />

      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
