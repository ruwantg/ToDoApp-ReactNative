import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#008080",
    padding: 10,
    borderColor: "#fff",
    borderTopWidth: 2,
  },
  textbox: {
    backgroundColor: "#fff",
    borderWidth: 0,
    padding: 7,
    fontSize: 16,
    marginBottom: 10,
  },
  switch: {
    container: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 5,
    },
    label: {
      color: "#fff",
      fontSize: 16,
      marginRight: 10,
    },
  },
  errorMessage: {
    container: {
      backgroundColor: "#fff",
      padding: 10,
      marginBottom: 10,
      borderColor: "#c00",
      borderWidth: 1,
      borderLeftWidth: 8,
    },
    label: {
      color: "#c00",
      fontSize: 14,
      fontWeight: "bold",
    },
    text: {
      color: "#c00",
      fontSize: 16,
    },
  },
});

export default styles;
