import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconStar} from '../../../assets';
import {fonts} from '../../../utils/fonts/index';
import {colors} from '../../../utils/colors/index';

export default function RatedDoctors({onPress, name, avatar, profession}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.imageDoctor} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
      </View>
      <View style={styles.star}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  imageDoctor: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 16,
  },
  star: {
    flexDirection: 'row',
  },
  profile: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
