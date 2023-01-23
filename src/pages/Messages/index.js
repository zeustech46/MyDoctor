import {StyleSheet, Text, View, ScrollView, Platform} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../utils/fonts/index';
import {colors} from '../../utils/colors/index';
import List from '../../components/molecules/List/index';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';

export default function Messages({navigation}) {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik Ibu, terima kasih banyak',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'oh tentu saja tidak karena atas ..',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Benar sekali Bapak',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.pageTitle}>Messages</Text>
          {doctors.map(doctor => {
            return (
              <List
                key={doctor.id}
                profile={doctor.profile}
                name={doctor.name}
                desc={doctor.desc}
                onPress={() => navigation.navigate('Chatting')}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    paddingTop: Platform.OS === 'ios' ? 40 : null,
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  pageTitle: {
    paddingHorizontal: 16,
    fontSize: 20,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginBottom: 24,
    marginTop: Platform.OS === 'ios' ? 20 : 30,
  },
});
