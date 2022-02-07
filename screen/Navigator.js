import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Task from "./Task";
import AddTask from "./AddTask";
import Loading from "./Loading";
import { useProvider } from "../context/Provider";

export const Navigator = () => {
  const Stack = createNativeStackNavigator();

  const { isAppReady } = useProvider();

  return isAppReady ? (
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
  ) : (
    <Loading />
  );
};
