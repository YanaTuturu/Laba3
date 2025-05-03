import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColoredBox from './components/ColoredBox';

export default function GridLayoutScreen() {
  const colors = [
    '#ff595e', '#ffca3a', '#8ac926', '#1982c4',
    '#6a4c93', '#ff924c', '#c77dff', '#70d6ff',
  ];

  return (
    <View style={styles.container}>
      {colors.map((c, idx) => (
        <ColoredBox key={idx} color={c} size={50} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',       
    justifyContent: 'center',
    alignItems: 'center',
  },
});
