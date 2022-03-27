import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
// @ts-ignore
import Stars from 'react-native-stars'

import SwiperComponent from '../components/Swiper';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>
      <View style={styles.headerContent}>
        <View style={{ width: '65%', }}>
          <Text style={styles.house}>Casa Juj</Text>
        </View>
        <View style={{ width: '35%', }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Stars
              update={() => null}
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={<Ionicons name="md-star" size={24} style={styles.myStarStyle} />}
              emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} />}
              halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStarStyle} />}
            />
          </View>
        </View>
      </View>

      <Text style={styles.price}>R$ 1.202,50</Text>
      <Text style={styles.description}>Casa chique com vários quartos e uma suite presidencial.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, marginTop: 35 }}>
        <View style={styles.slide}>
          <Image
            source={require('../assets/house5.jpg')}
            style={{ width: 95, height: 95, borderRadius: 10 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/house6.jpg')}
            style={{ width: 95, height: 95, borderRadius: 10 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/house1.jpg')}
            style={{ width: 95, height: 95, borderRadius: 10 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%',
  },
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  },
  rating: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 9,
    color: '#4f4a4a'
  },
  myStarStyle: {
    color: '#e7a74e',
    backgroundColor: 'transparent',
  },
  price: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#000'
  },
  description: {
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    color: '#4f4a4a',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 90,
    //width: 90,
    borderRadius: 10,
    marginRight: 20
  }
})