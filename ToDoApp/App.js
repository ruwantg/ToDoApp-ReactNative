import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TaskInput from "./src/components/TaskInput";
import TaskList from "./src/components/TaskList";
import styles from "./src/styles/main";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), title, status: false },
    ]);
  };

  const deleteTask = (taskId) => {
    
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const toggleStatus = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleStatus={toggleStatus}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 50,
//     backgroundColor: "#fff",
//   },
// });
