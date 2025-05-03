import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColoredBox from './components/ColoredBox';

export default function ColumnLayoutScreen() {
  return (
    <View style={styles.container}>
      <ColoredBox color="#ffca3a" />
      <ColoredBox color="#1982c4" />
      <ColoredBox color="#6a4c93" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
});
