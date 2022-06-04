import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {


  const {title,subTitle,subTitleCTA,image}=props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          {subTitle}{' '}
          <Text style={styles.subTitleCTA}>
            {subTitleCTA}
          </Text>
          </Text>
      </View>


  <View style={styles.buttonContainer}>
    
      <StyledButton 
      type="primary" 
      title="Custom Order" 
      onPress={()=>{
        console.warn("Custom Order was Pressed")
      }}/>

    <StyledButton 
      type="secondary" 
      title="Existing Inventory" 
      onPress={()=>{
        console.warn("Existing Inventory was Pressed")
      }}/>
      </View>
    </View>
  );
};

export default CarItem;
