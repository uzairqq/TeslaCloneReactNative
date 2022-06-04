import {  View,FlatList,Dimensions } from 'react-native'
import cars from './cars'
import CarItem from '../CarItem'
import styles from './styles'

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
         data={cars} 
         renderItem={({item})=> <CarItem car={item}  />}
         snapToAlignment={'start'}
         decelerationRate={'normal'}
         snapToInterval={Dimensions.get('screen').height}
         showsVerticalScrollIndicator={false}
         />
    </View>
  )
}

export default CarsList;

