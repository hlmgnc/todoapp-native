import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState, setState } from "react";

export default function App() {
  const [label, setLabel] = React.useState("");

  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    setTodos((oldTodos) => [...todos, label]);
    setLabel("");
  };

  return (
    <View style={styles.container}>
      <Text>TODO APP!</Text>
      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="add your todo"
          onChangeText={setLabel}
          value={label}
        />
        <Button
          title="ADD"
          color="green"
          height="20"
          paddingTop="20"
          // style={styles.buttonStyle}
          onPress={addTodo}
        />
      </SafeAreaView>
      <Text>{todos[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  buttonStyle: {},
});
