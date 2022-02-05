import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import { useProvider } from "../context/Provider";
import { format, isBefore } from "date-fns";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Task = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current; // our animated value

  const { task, dispatch } = useProvider();

  // console.log(task);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [200, 80],
    extrapolate: "clamp",
  });

  const center = scrollY.interpolate({
    inputRange: [100, 200],
    outputRange: [90, 30],
    extrapolate: "clamp",
  });

  const font = scrollY.interpolate({
    inputRange: [100, 200],
    outputRange: [60, 30],
    extrapolate: "clamp",
  });

  const orderByDesc = (item1, item2) => {
    return isBefore(new Date(item1.createdAt), new Date(item2.createdAt));
  };

  const todaysTask = (task) => {
    // console.log( task.createdAt.split(' ')[0] === format(new Date(),'dd/MM/yyyy'));
    return (
      task.createdAt.split(" ")[0] === format(new Date(), "dd/MM/yyyy") ||
      !task.isCompleted
    );
  };

  const handleBtn = (id, isCompleted) => {
    const result = [
      ...task.filter((tk) => tk.id !== id),
      { ...task.find((tk) => tk.id === id), isCompleted: !isCompleted },
    ];
    dispatch({ type: "TASK_COMPLETED", payload: result.sort(orderByDesc) });
  };

  const renderItem = ({ item, index }) => {
    const swipeRight = (progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [0, 200],
        outputRange: [0.5, 1],
        extrapolate: "clamp",
      });
      return (
        <Animated.View
          style={{
            backgroundColor: "lightblue",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Animated.Text
            style={{
              marginLeft: 50,
              marginRight: "auto",
              fontSize: 15,
              fontWeight: "bold",
              transform: [{ scale }],
            }}
          >
            Remove
          </Animated.Text>
        </Animated.View>
      );
    };

    const height = new Animated.Value(70);
    const animatedDelete = () => {
      Animated.timing(height, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
      }).start(async () => {
        try {
          const result = task.filter((ta) => ta.id !== item.id);
          await AsyncStorage.setItem("@myT_app", JSON.stringify(result));
          dispatch({ type: "TASK_COMPLETED", payload: result });
        } catch (error) {
          console.log(error.message);
        }
      });
    };

    // console.log(item, "==>", index);
    return (
      <View
        style={{ borderTopWidth: index === 0 ? 5 : 0, borderBottomWidth: 5 }}
        key={item.id}
      >
        <GestureHandlerRootView>
          <Swipeable
            renderLeftActions={swipeRight}
            leftThreshold={100}
            onSwipeableOpen={animatedDelete}
          >
            <View style={styles.task}>
              <TouchableOpacity
                style={styles.check}
                onPress={() => handleBtn(item.id, item.isCompleted)}
              >
                {item.isCompleted && (
                  <View
                    style={{
                      backgroundColor: "lightgreen",
                      height: 30,
                      width: 30,
                      borderRadius: 30,
                    }}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={[
                  styles.taskTitle,
                  {
                    textDecorationLine: item.isCompleted
                      ? "line-through"
                      : "none",
                  },
                ]}
              >
                {item.task}
              </Text>
            </View>
          </Swipeable>
        </GestureHandlerRootView>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          // height: 20,
          // flex: 1,
          backgroundColor: "#f3db54",
          height: headerHeight,
          // alignItems:center,
          justifyContent: "center",
          // width: headerHeight,
          // borderRadius:headerHeight
        }}
      >
        <Animated.Text
          style={{
            fontWeight: "bold",
            fontSize: font,
            left: center,
            marginTop: 20,
          }}
        >
          {format(new Date(), "dd MMM")}
        </Animated.Text>
      </Animated.View>

      <Animated.FlatList
        style={styles.tasksContaner}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }], // event.nativeEvent.contentOffset.x to scrollX
          { useNativeDriver: false } // use native driver for animation: ;
        )}
        data={task.sort(orderByDesc).filter(todaysTask)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          padding: 20,
          marginHorizontal: 10,
          alignItems: "center",
          marginHorizontal: 20,
        }}
        onPress={() => navigation.navigate("AddTask")}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Add Task
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  tasksContaner: { marginHorizontal: 20, marginTop: 5 },
  task: {
    paddingVertical: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  check: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 25,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  taskTitle: { fontSize: 25, marginLeft: 20, fontWeight: "bold" },
  taskDetail: { flexDirection: "row", alignItems: "center" },
});
