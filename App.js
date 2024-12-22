import React from 'react';
import { StyleSheet, View } from 'react-native';
import PasswordGenerator from './PasswordGenerator';

export default function App() {
  return (
    <View style={styles.container}>
      <PasswordGenerator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
