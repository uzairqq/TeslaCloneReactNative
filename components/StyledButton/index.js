import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../StyledButton/styles";

const StyledButton = (props) => {

  const type=props.type;
  const backgroundColor=type==='primary'?'grey':'white';
  const textColor=type==='primary'?'white':'black';
  const title=props.title;
  const onPress=props.onPress;

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={()=>onPress()}
      >
        <Text style={[styles.text,{color:textColor}]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
