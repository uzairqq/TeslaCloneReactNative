import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.backgroundImage}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting From $69,460</Text>
            </View>
        </View>
    )
}

export default CarItem;
