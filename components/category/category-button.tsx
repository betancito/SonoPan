import type React from "react";
import { Text, Pressable, View } from "react-native";
import { Link } from "expo-router";

interface CategoryButtonProps {
  title: string
  category_id : string
}



export default function CategoryButton({ title, category_id}: CategoryButtonProps) {
  return (
    <Link href={`/${title}`} asChild>
      <Pressable
        className="flex-row items-center justify-center px-4 py-3 m-5 rounded-full border border-yellow-600 active:bg-yellow-950"
      >
        <View className="mr-2" key={category_id}>
          <Text className="font-extrabold color-yellow-600 text-3xl">{title}</Text>
        </View>
      </Pressable>
    </Link>
  )
}

