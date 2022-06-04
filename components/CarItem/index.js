import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at Price $69,450</Text>
      </View>

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
  );
};

export default CarItem;
