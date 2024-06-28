import { View, Text, Switch, Button } from "react-native";
import styles from "./styles";

export default function Task(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.task.description}</Text>
      {/* <Text style={styles.text}>Id: {props.task.id}</Text> */}
      <Text style={styles.text}>
        Status: {props.task.done ? "Done" : "Due"}
      </Text>
      <Switch
        value={props.task.done}
        onValueChange={() => props.onStatusChange(props.task.id)}
      ></Switch>
      <Button title="Delete" onPress={() => props.onDelete(props.task.id)} />
    </View>
  );
}
