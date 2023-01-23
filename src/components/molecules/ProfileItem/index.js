import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts/index';
import {colors} from '../../../utils/colors/index';

export default function ProfileItem({title, desc}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  desc: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
});
