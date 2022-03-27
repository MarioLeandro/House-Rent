import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native';

interface NewProps {
    cover: ImageSourcePropType
    offer: string
    onPress: () => void
    name: string
  }

export default function Recommended(props: NewProps) {
    return (
        <ImageBackground
            source={props.cover}
            style={styles.container}
            blurRadius={5}
        >
            <Text style={[styles.house, styles.shadow]}>{props.name}</Text>
            <Text style={[styles.description, styles.shadow]}>{props.offer}</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 230,
        marginRight: 20,
        marginBottom: 40,
        opacity: 0.8,
        backgroundColor: '#000',
        marginLeft: 3,
        padding: 12,
        marginTop: 20
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 15,
    },
    description: {
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
        color: '#fff'
    },
    shadow: {
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 3,
        textShadowColor: '#000'
    }
})