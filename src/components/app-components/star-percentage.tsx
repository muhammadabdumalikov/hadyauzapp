import React from 'react';
import {View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const SemiFilledStar = ({rating}: {rating: number}) => {
  const percentage = (rating / 5) * 100; // Calculate the percentage

  return (
    <View style={styles.starContainer}>
      {/* Background Star (Full Color) */}
      <AntDesign
        name="star"
        size={18}
        color="#ddd"
        style={styles.backgroundStar}
      />

      {/* Foreground Star (Clipped by percentage) */}
      <View style={[styles.foregroundStar, {width: `${percentage}%`}]}>
        <AntDesign name="star" size={18} color="#FFA500" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    position: 'relative',
    width: 18,
    height: 18,
  },
  backgroundStar: {
    position: 'absolute',
  },
  foregroundStar: {
    position: 'absolute',
    overflow: 'hidden',
  },
});
