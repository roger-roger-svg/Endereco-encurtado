import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinkShortener from './LinkShortener'; // Importe o componente LinkShortener

export default function App() {
  return (
    <View style={styles.container}>
      <LinkShortener /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
