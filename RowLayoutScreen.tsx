import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColoredBox from './components/ColoredBox';

export default function RowLayoutScreen() {
  return (
    <View style={styles.container}>
      <ColoredBox color="#ff595e" />
      <ColoredBox color="#8ac926" />
      <ColoredBox color="#1982c4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',   
    alignItems: 'center',             
  },
});
