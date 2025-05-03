import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Pressable, Text } from 'react-native';

import RowLayoutScreen from './RowLayoutScreen';
import ColumnLayoutScreen from './ColumnLayoutScreen';
import GridLayoutScreen from './GridLayoutScreen';

// Типи екранів
type Layout = 'row' | 'column' | 'grid';
const layouts: Layout[] = ['row', 'column', 'grid'];

export default function App() {
  const [layoutIdx, setLayoutIdx] = useState(0);

  // Функція для перемикання між екранами
  const cycleLayout = () => setLayoutIdx((prev) => (prev + 1) % layouts.length);

  // індекси для вибору екрана
  const CurrentScreen =
    layoutIdx === 0 ? RowLayoutScreen :
    layoutIdx === 1 ? ColumnLayoutScreen :
    GridLayoutScreen;

  return (
    <SafeAreaView style={styles.root}>
      <Pressable style={styles.button} onPress={cycleLayout}>
        <Text style={styles.buttonText}>
          Перемкнути макет ({layouts[layoutIdx]})
        </Text>
      </Pressable>

      <CurrentScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fafafa' },

  button: {
    margin: 16,
    padding: 12,
    backgroundColor: '#6a4c93',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});
