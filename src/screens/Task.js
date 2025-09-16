import React from "react";
import { Text, View, Image, Button } from "react-native";
import taskStyles from "../styles/taskStyles";

const Task = ({ navigation }) => {
  return (
    <View style={taskStyles.container}>
      <View style={taskStyles.header}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={taskStyles.headerImage}
        />
        <Text style={taskStyles.headerText}>Demo React App</Text>
      </View>

      <Text style={taskStyles.title}>Anubhutii</Text>
      <Text style={taskStyles.header1}>Welcome's You !! </Text>

      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={taskStyles.image}
      />
      <Text style={taskStyles.caption}>This is a Demo React Native page</Text>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          title="LOGIN  !!"
          color="purple"
          onPress={() => navigation.navigate("Login")}
        />
        <View style={{ width: 12 }} />
        <Button
          title="Task 1"
          color="orange"
          onPress={() => navigation.navigate("Card")}
        />
        <View style={{ width: 12 }} />
        <Button
          title="Task 2"
          color="green"
          onPress={() => navigation.navigate("Bp")}
        />
      <View style={{ width: 12 }} />
      <Button
        title="Task 3"
        color="Yellow"
        onPress={() => navigation.navigate("Data")}
      />
      <View style={{ width: 12 }} />
      <Button
        title="Task 4"
        color="White"
        onPress={() => navigation.navigate("Bdata")}
      />
    </View>
  </View>
  );
};

export default Task;
