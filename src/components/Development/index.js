import React from 'react';
import { View, SafeAreaView, Image, Text  } from 'react-native';
import developImage from '../../assets/develop.png';

export default function Development(){
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>Em Desenvolvimento</Text>
            <Image source={developImage} resizeMode='contain' style={{width: 400, height: 500}} />
        </SafeAreaView>
    )
}