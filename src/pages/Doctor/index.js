import {StyleSheet, Text, View, ScrollView, Platform} from 'react-native';
import React from 'react';
import HomeProfile from '../../components/molecules/HomeProfile/index';
import DoctorCategory from '../../components/molecules/DoctorCategory/index';
import RatedDoctors from '../../components/molecules/RatedDoctors/index';
import NewsItem from '../../components/molecules/NewsItem/index';
import {fonts} from '../../utils/fonts/index';
import {colors} from '../../utils/colors/index';
import Gap from '../../components/atoms/Gap/index';
import {JSONCategoryDoctor} from '../../assets';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

export default function Doctor({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <HomeProfile
            onPress={() => {
              navigation.navigate('UserProfile');
            }}
          />
          <Text style={styles.welcome}>
            Mau Konsultasi dengan siapa hari ini
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Gap width={16} />
              {JSONCategoryDoctor.data.map(item => {
                return (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => {
                      navigation.navigate('ChooseDoctor');
                    }}
                  />
                );
              })}
            </View>
          </ScrollView>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctors
            name="Alexa Rachel"
            profession="Peditrician"
            avatar={DummyDoctor1}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctors
            name="Sunny Frank"
            profession="Dentist"
            avatar={DummyDoctor2}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctors
            name="Poe Minn"
            profession="Podiatrist"
            avatar={DummyDoctor3}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <Text style={styles.sectionLabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
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
    paddingTop: Platform.OS === 'ios' ? 35 : 0,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  welcome: {
    paddingHorizontal: 16,
    fontSize: 20,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    width: 250,
    flex: 1,
  },
  card: {
    flexDirection: 'row',
  },
  sectionLabel: {
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    marginTop: 30,
    marginBottom: 16,
    color: colors.text.primary,
  },
});
