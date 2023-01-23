import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyNews1} from '../../../assets';
import {fonts} from '../../../utils/fonts/index';
import {colors} from '../../../utils/colors/index';

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.day}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.imageNews} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 16,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    width: 250,
  },
  day: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
    fontFamily: fonts.primary.normal,
  },
  imageNews: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
