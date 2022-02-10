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
