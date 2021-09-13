import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: "100%",
    marginTop: 10
  },
  maskedInput: {
    flexGrow: 1,
    height: 40,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    borderStyle: "solid",
    alignSelf: "flex-start"
  },
  containerMask: {
    flexDirection: "row",
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  errorMessage: {
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: 15,
    color: "#f00",
  },
  scroolView: {
    width: "100%",
  }
  });
export default styles
