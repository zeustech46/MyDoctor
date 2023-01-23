import {Text, View, StyleSheet, Platform} from 'react-native';
import React from 'react';
import ILLogo from '../../assets/illustration/logo.svg';
import Input from '../../components/atoms/Input/index';
import Link from '../../components/atoms/Link/index';
import Button from '../../components/atoms/Button/index';
import Gap from '../../components/atoms/Gap/index';
import {fonts} from '../../utils/fonts/index';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
      <Input label="Email Adress" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forget Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link
        title="Create Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: Platform.OS === 'ios' ? 50 : 40,
    marginTop: Platform.OS === 'ios' ? 30 : null,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    color: 'black',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
