import { StatusBar } from "expo-status-bar";
import { View, Alert } from "react-native";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import styles from "./src/styles/main";
import uuid from "react-uuid";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);

  const handleAddTask = (taskDescription, taskDone) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      description: taskDescription,
      done: taskDone,
    });
    setTasks(updatedTasks);
  };

  const onStatusChange = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, done: !task.done };
        return task;
      })
    );
  };

  const onDelete = (id) => {
    Alert.alert("Remove Task", "Are you sure? This action cannot be undone!", [
      {
        text: "Confirm",
        onPress: () => {
          setTasks(tasks.filter((task) => task.id !== id));
        },
      },
      { text: "Cancel" },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Tasks
        tasks={tasks}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
