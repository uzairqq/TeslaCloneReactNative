import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../StyledButton/styles";

const StyledButton = (props) => {

  const type=props.type;
  const backgroundColor=type==='primary'?'grey':'white';
  const textColor=type==='primary'?'white':'black';
  


  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={() => {
          console.warn("hey there");
        }}
      >
        <Text style={[styles.text,{color:textColor}]}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
