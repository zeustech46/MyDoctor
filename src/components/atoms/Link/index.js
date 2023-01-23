import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';

export default function Link({title, size, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
