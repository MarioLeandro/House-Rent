import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import New from '../components/New'

export type RootStackParamList = {
    YourScreen: string;
  };

export default function Home() {
    const navigation = useNavigation<any>();
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#FFF' }}
        >
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput
                        placeholder='O que está procurando?'
                        style={styles.input}
                    >

                    </TextInput>
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <New 
                cover={require('../assets/house1.jpg')}
                name="Casa de Praia"
                description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                onPress={() => navigation.navigate('detail') }
                price="R$ 1.204,90"
                />
                <New 
                cover={require('../assets/house2.jpg')}
                name="Casa Floripa"
                description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                onPress={() => {}}
                price="R$ 1.504,90"
                />
                <New 
                cover={require('../assets/house3.jpg')}
                name="Rancho SP"
                description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                onPress={() => {}}
                price="R$ 2.204,90"
                />
    
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        height: 37,
        borderRadius: 10
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 10,
        fontFamily: 'Montserrat_700Bold',
        color: '#4f4a4a'
    }
})