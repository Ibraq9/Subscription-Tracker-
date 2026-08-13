import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {

  return (
    <SafeAreaView  className="flex-1 bg-background items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!ss
      </Text> 

      <Text>sd</Text>

      <Link href={'/(Tabs)/subscriptions/Spotify'}>go to Subscription/route?</Link>
    </SafeAreaView >
  );
}