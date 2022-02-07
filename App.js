import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AddTask from "./screen/AddTask";
import Home from "./screen/Home";
import AppLoading from "expo-app-loading";
// import { useFonts, Inter_900Black,BowlbyOne_400Regular } from '@expo-google-fonts/bowlby-one';
import { useFonts, Chango_400Regular } from "@expo-google-fonts/chango";
import NewScreen from "./screen/NewScreen";
import Task from "./screen/Task";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "./context/Provider";
import TaskList from "./screen/TaskList";
import { Navigator } from "./screen/Navigator";
import Loading from "./screen/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Chango_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }


  return (

    // <>
    //    {/* <Home/> */}
    //    {/* <Scroll/> */}
    //    {/* <NewScreen/> */}
    //    {/* <TaskList/> */}
    //    {/* <AddTask/> */}
    // </>

    <Provider>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
