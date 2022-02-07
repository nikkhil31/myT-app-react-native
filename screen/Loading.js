import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.taskTitle}>Tasks</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3db54",
  },
  taskTitle: {
      fontSize:40,
      color:'#000',
      fontWeight:'bold',
  },
});
