import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  size?: number;
  color: string;
}

export default function ColoredBox({ size = 80, color }: Props) {
  return <View style={[styles.box, { width: size, height: size, backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  box: {
    margin: 6,                // невеликий відступ, щоб квадрати не торкались
    borderRadius: 8,
  },
});
