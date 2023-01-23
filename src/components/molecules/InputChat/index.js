import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors/index';
import Button from '../../atoms/Button/index';
import {fonts} from '../../../utils/fonts/index';

export default function InputChat() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Sesuatu" />
      <Button type="btn-icon-send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
