import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Animated,
  } from "react-native";
  import React, { useRef } from "react";
  
  const Home = () => {
    const scrollY = useRef(new Animated.Value(0)).current; // our animated value
  
    return (
      <>
        <Animated.View
          style={[
            styles.yellowCircle,
            {
              transform:[{
                scale: scrollY.interpolate({
                  inputRange: [0, 50],
                  outputRange: [1, 0.2],
                  extrapolate: 'clamp',
                }),
              }]
            },
          ]}
        >
           <View style={styles.textContainer}>
          <Text style={styles.dateText1}>13</Text>
          <Text style={styles.dateText2}>May</Text>
        </View>
        </Animated.View>
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }], // event.nativeEvent.contentOffset.x to scrollX
            { useNativeDriver: true } // use native driver for animation
          )}
        >
          <View style={styles.taskContainer}>
            <View style={{ ...styles.task, borderTopWidth: 5 }}>
              <View style={styles.crosBtn}></View>
              <Text style={styles.taskTitle}>Work On Design</Text>
            </View>
            <View style={styles.task}>
              <View style={styles.crosBtn}></View>
              <Text style={styles.taskTitle}>Work On Design</Text>
            </View>
            <View style={styles.task}>
              <View style={styles.crosBtn}></View>
              <Text style={styles.taskTitle}>Work On Design</Text>
            </View>
            <View style={styles.task}>
              <View style={styles.crosBtn}></View>
              <Text style={styles.taskTitle}>Work On Design</Text>
            </View>
            <View style={styles.task}>
              <View style={styles.crosBtn}></View>
              <Text style={styles.taskTitle}>Work On Design</Text>
            </View>
            <View style={styles.task}>
              <View style={styles.crosBtn}></View>
              <Text style={styles.taskTitle}>Work On Design</Text>
            </View>
          </View>
        </Animated.ScrollView>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.bottomBtnText}>ADD TASK</Text>
        </TouchableOpacity>
      </>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    bottomBtn: {
      backgroundColor: "#000",
      height: 60,
      // top: 2,
      alignItems: "center",
      marginHorizontal: 20,
    },
    bottomBtnText: {
      color: "#fff",
      fontSize: 40,
      fontWeight: "bold",
    },
    taskContainer: {
      // backgroundColor:'#ddd',
      marginHorizontal: 30,
      marginVertical: 20,
    },
    task: {
      flexDirection: "row",
      // justifyContent:'center'
      alignItems: "center",
      // paddingHorizontal:5,
      paddingVertical: 20,
      // borderTopWidth:2,
      borderBottomWidth: 5,
    },
    crosBtn: {
      width: 50,
      height: 50,
      borderWidth: 5,
      borderRadius: 25,
      borderColor: "#000",
    },
    taskTitle: {
      fontSize: 25,
      marginLeft: 20,
      fontWeight: "bold",
    },
    yellowCircle: {
      width: 400,
      height: 400,
      backgroundColor: "#f3db54",
      borderRadius: 200,
      // position: "absolute",
      top: -55,
      left: -60,
    },
    dateText1: {
      fontFamily: "Chango_400Regular",
      fontSize: 120,
      fontWeight: "bold",
      right: 10,
    },
    dateText2: {
      fontFamily: "Chango_400Regular",
      fontSize: 80,
      fontWeight: "bold",
      top: -50,
    },
    textContainer: {
      width: 300,
      height: 350,
      // backgroundColor:'#ddd',
      alignItems: "center",
      justifyContent: "center",
    },
  });
  