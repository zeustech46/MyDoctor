import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts/index';
import {colors} from '../../../utils/colors/index';
import {
  IconNext,
  IconEditProfile,
  IconLanguage,
  IconRate,
  IconHelp,
} from '../../../assets';

export default function List({profile, name, desc, type, onPress, icon}) {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
  };

  return (
    <TouchableOpacity style={styles.wrapper(type)} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.imageMessage} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: type => ({
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 16,
    marginBottom: 16,
  }),
  content: {
    flex: 1,
  },
  imageMessage: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginLeft: 16,
  },
  message: {
    marginLeft: 16,
    fontSize: 12,
    fontFamily: fonts.primary[200],
  },
});
