import {StyleSheet, View, Platform} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index';
import {Input, Button} from '../../components/atoms';
import Gap from '../../components/atoms/Gap/index';
import {colors} from '../../utils/colors/index';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Header label="Register" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Adress" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? 30 : null,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
