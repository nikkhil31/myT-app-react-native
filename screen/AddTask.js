import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useProvider } from "../context/Provider";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { format } from "date-fns";

const AddTask = ({ navigation }) => {
  const [task, setTask] = useState("");

  const { task: tasks, dispatch } = useProvider();

  const handleSubmit = async () => {
    try {
      // return await AsyncStorage.removeItem('@myT_app')

      // console.log(nanoid());
      const data = {
        id: nanoid(),
        task,
        isCompleted: false,
        createdAt: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
        completedAt: null,
      };

      // return console.log(data)
      const result = JSON.stringify([...tasks, data]);

      // console.log(result);

      await AsyncStorage.setItem("@myT_app", result);
      dispatch({ type: "ADD_TASK", payload: data });
      navigation.replace("Home");
    } catch (e) {
      console.log("error", e.message);
    }
    // console.log(task);
    // await updateStorageItem(result);
  };

  return (
    <KeyboardAvoidingView behavior={"position"} style={styles.addContainer}>
      <TouchableOpacity
        style={{ position: "absolute", top: 20, left: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.taskTitle1}>NEW</Text>
        <Text style={styles.taskTitle2}>TASK</Text>
        <View style={styles.yellowCircle}>
          <Text style={styles.dateText1}>{format(new Date(), "dd")}</Text>
          <Text style={styles.dateText2}>{format(new Date(), "MMM")}</Text>
        </View>
        <View style={styles.task}>
          <TextInput
            style={styles.taskTitle}
            placeholder="Add Your Task"
            onChangeText={setTask}
          />
        </View>
        <TouchableOpacity style={styles.bottomBtn} onPress={handleSubmit}>
          <Text style={styles.bottomBtnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBtn: {
    backgroundColor: "#000",
    height: 60,
    // top: 2,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 40,
    width: 380,
  },
  bottomBtnText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  task: {
    width: 380,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    marginTop: 25,
    paddingVertical: 20,
    // alignItems:'center'
  },
  taskTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  dateText1: {
    fontSize: 120,
    fontWeight: "bold",
    // letterSpacing:10
  },
  dateText2: {
    fontSize: 80,
    fontWeight: "bold",
    top: -50,
  },
  taskTitle1: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 60,
    letterSpacing: 5,
  },
  taskTitle2: {
    fontSize: 50,
    fontWeight: "bold",
    top: -20,
  },
  addContainer: {
    // alignItems: "center",
    paddingTop: 20,
    flex: 1,
  },
  yellowCircle: {
    width: 400,
    height: 400,
    backgroundColor: "#f3db54",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
