import React from 'react';
import { View, ImageBackground , Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const {goBack} = useNavigation();

    function handleNavigationBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
            resizeMode='contain' 
            source={giveClassesBgImage} 
            style={styles.content}
            >
                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.description}>Para ser um proffy você precisa se cadastrar na nossa plataforma web.?</Text>
            </ImageBackground>

            <RectButton onPress={handleNavigationBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;