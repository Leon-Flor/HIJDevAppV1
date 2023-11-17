import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {CardGlass} from './components';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './navigation/StackNavigation';

export const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    color: '#FFFFFF',
  },
});
