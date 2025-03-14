import { Slot } from "expo-router";
import { View } from "react-native";
import "../global.css";

export default function Layout(){
  return (
    <View className="bg-slate-800 h-full p-5">
      <Slot/>
    </View>
  );
}