import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    height: 40,
    padding: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginBottom: 6,
  },
});
