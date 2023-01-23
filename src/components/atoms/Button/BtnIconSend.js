import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils/colors/index';

export default function BtnIconSend({disable}) {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    height: 45,
    width: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingLeft: 8,
  }),
});
