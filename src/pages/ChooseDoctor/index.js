import {StyleSheet, View, ScrollView, Platform} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index';
import List from '../../components/molecules/List/index';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';
import Gap from '../../components/atoms/Gap/index';
import {colors} from '../../utils/colors/index';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        label="Pilih Dokter"
        onPress={() => {
          navigation.goBack();
        }}
        type="dark"
      />
      <ScrollView>
        <Gap height={16} />
        <List
          profile={DummyDoctor4}
          name="Alexander Janie"
          desc="Wanita"
          onPress={() => navigation.navigate('DoctorProfile')}
        />
        <List
          profile={DummyDoctor6}
          name="John McParker Steve"
          desc="Pria"
          type="next"
          onPress={() => navigation.navigate('DoctorProfile')}
        />
        <List
          profile={DummyDoctor5}
          name="Nairobi Putri Hayza"
          desc="Wanita"
          type="next"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : null,
  },
});
