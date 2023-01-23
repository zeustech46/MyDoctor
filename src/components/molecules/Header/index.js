import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Button} from '../../atoms';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';
import DarkProfile from './darkProfile';

export default function Header({label, navigation, onPress, type}) {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }

  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{label}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
