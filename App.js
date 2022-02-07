import { useFonts, Chango_400Regular } from "@expo-google-fonts/chango";
import { Provider } from "./context/Provider";
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
    <Provider>
      <Navigator />
    </Provider>
  );
}

