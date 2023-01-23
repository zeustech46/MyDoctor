import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index';
import {ILNullPhoto, IconAddPhoto} from '../../assets';
import {Button, Link, Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.AddPhoto} />
          </View>
          <Text style={styles.name}>Shayna Meilinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={() => alert('Kamu Berhasil')}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            size={16}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? 30 : null,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 64,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 110,
    width: 110,
  },
  AddPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    marginTop: 26,
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});
