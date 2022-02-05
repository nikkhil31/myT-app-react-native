import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StyleSheet, Text, View, Animated, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import data from './Exampledata'

function ListItem({ email,setEmails }) {
  const { title, sender, subject } = email;

  const swipeRight = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-200, 0],
      outputRange: [1, 0.5],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        style={{
          backgroundColor: "red",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Animated.Text
          style={{
            marginLeft: "auto",
            marginRight: 50,
            fontSize: 15,
            fontWeight: "bold",
            transform: [{ scale }],
          }}
        >
          Delete Item
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
    }).start(() =>
      setEmails((prevState) => prevState.filter((e) => e.id !== email.id))
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={swipeRight}
        rightThreshold={-200}
        onSwipeableOpen={animatedDelete}
      >
        <Animated.View
          style={{
            flex: 1,
            flexDirection: "row",
            height: 70,
            alignItems: "center",
            borderBottomWidth: 1,
            backgroundColor: "white",
          }}
        >
          <Text style={{ width: 150 }}>{title}</Text>
          <View style={{ overflow: "visible" }}>
            <Text>From: {sender}</Text>
            <Text>Subject: {subject}</Text>
          </View>
        </Animated.View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default function TaskList() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 2,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 3,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 4,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 5,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 6,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 7,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 8,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 9,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 10,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 11,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 12,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 13,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 14,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
    {
      id: 15,
      title: "test test",
      sender: "nikhil",
      subject: "this isi test",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={emails}
        renderItem={({ item }) => <ListItem email={item} setEmails={setEmails} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
