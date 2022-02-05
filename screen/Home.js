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

  const circleHeight = () => {
    return scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [200, 0],
        extrapolate: 'clamp',
        // useNativeDriver: false,
    });
  }

  const scale = () => {
    return scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0.2],
        extrapolate: 'clamp',
        // useNativeDriver: false,
    });
  }
  

  const position = () => {
    return scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 70],
      extrapolate: 'clamp',
      // useNativeDriver: false,
  });
  }
  const positionY = () => {
    return scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -80],
      extrapolate: 'clamp',
      // useNativeDriver: false,
  });
  }
  const positionY2 = () => {
    return scrollY.interpolate({
      inputRange: [0, 350],
      outputRange: [0, -350],
      extrapolate: 'clamp',
      // useNativeDriver: false,
  });
  }
 
  const fontSizeAni = () => {
    return scrollY.interpolate({
      inputRange: [0, 70],
      outputRange: [60, 10],
      extrapolate: 'clamp',
      // useNativeDriver: false,
  });
  }


  // const middle

  return (
    
    <>
      <Animated.View style={styles.container}>
        <Animated.View style={[styles.yellowCircle,{
          borderRadius:circleHeight(),
         transform:[
           {translateX:position()},
           {translateY:positionY()},
           {scaleY: scale()},
         ],
          // scaleX:2
        }]}>
          <Text style={styles.date}>3 FAB</Text>
        </Animated.View>
        <Animated.ScrollView
          // style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }], // event.nativeEvent.contentOffset.x to scrollX
            { useNativeDriver: true } // use native driver for animation
          )}

          style={{ transform:[{
            // translateX:position(),
            translateY:positionY2(),
            // scaleY: scale()
          }],}}
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
      </Animated.View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  yellowCircle: {
    backgroundColor: "#f3db54",
    width: 400,
    height: 400,
    borderRadius: 175,
    left: -65,
    top: -65,
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
  },
  date: {
    // fontSize: 60,
    // width: 120,
    fontWeight: "bold",
    textAlign: "center",
  },
  taskContainer:{
    marginHorizontal: 30,
    marginVertical: 10,
    // marginTop:350,
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
});
