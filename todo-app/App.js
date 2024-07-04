import { StatusBar } from "expo-status-bar";
import { View, Alert } from "react-native";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import styles from "./src/styles/main";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksCollection = await getDocs(collection(db, "tasks"));
      const tasksData = tasksCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (taskDescription, taskDone) => {
    const newTask = {
      description: taskDescription,
      done: taskDone,
    };

    const docRef = await addDoc(collection(db, "tasks"), newTask);
    setTasks([...tasks, { id: docRef.id, ...newTask }]);
  };

  const onStatusChange = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        updateDoc(taskDoc, { done: !task.done });
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onDelete = (id) => {
    Alert.alert("Remove Task", "Are you sure? This action cannot be undone!", [
      {
        text: "Confirm",
        onPress: async () => {
          await deleteDoc(doc(db, "tasks", id));
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
