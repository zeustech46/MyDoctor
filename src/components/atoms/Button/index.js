import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors/index';
import IconOnly from './IconOnly';
import BtnIconSend from './BtnIconSend';

export default function Button({type, title, icon, onPress, disable}) {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} />;
  }

  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  title: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
