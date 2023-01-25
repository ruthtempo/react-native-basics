import { StyleSheet } from "react-native";

export const stylesFn = ({ fontSize = 12 }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightgray",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "purple",
      padding: 20,
      borderRadius: 5,
      margin: 5,
      color: "white",
    },
    imageStyle: {
      height: 100,
      width: 100,
    },
    text: {
      fontSize: fontSize,
    },
  });
};
