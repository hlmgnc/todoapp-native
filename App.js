import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function App() {
  const [label, setLabel] = React.useState("");

  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    setTodos((oldTodos) => [...oldTodos, label]);
    setLabel("");
  };

  const clearAll = () => {
    setTodos((oldTodos) => []);
  };

  return (
    <View style={styles.container}>
      <Text>TODO APP!</Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="add your todo"
            onChangeText={setLabel}
            value={label}
          />
          <Button
            title="ADD"
            color="green"
            style={styles.buttonStyle}
            onPress={addTodo}
          />
        </View>
        <View style={{ height: 600 }}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>
                <BouncyCheckbox
                  size={25}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "red" }}
                  onPress={() => {}}
                />
                {item}
              </Text>
            )}
            keyExtractor={(item, index) => index}
          />
          <Button
            title="CLEAR ALL"
            color="red"
            // style={styles.clearButton}
            onPress={clearAll}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  // inputContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  // },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  buttonStyle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  clearButton: {},
});
