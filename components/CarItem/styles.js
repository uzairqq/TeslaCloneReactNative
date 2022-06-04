import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height:Dimensions.get('screen').height
    // height:Dimensions.get('window').height
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
    width:'100%'
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "grey",
  },
  subTitleCTA:{
    textDecorationLine:'underline'
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  buttonContainer:{
    position:"absolute",
    bottom:50,
    width:'100%'
  }
});

export default styles;
