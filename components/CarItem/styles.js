import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    height: "100%",
    width: "100%",
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
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
