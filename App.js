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

export default function App() {
  let [fontsLoaded] = useFonts({
    Chango_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();

  return (
    // <>
    //    {/* <Home/> */}
    //    {/* <Scroll/> */}
    //    {/* <NewScreen/> */}
    //    {/* <TaskList/> */}
    //    {/* <AddTask/> */}
    // </>

    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Task}
            // options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="AddTask" component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
