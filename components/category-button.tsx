import type React from "react"
import { Text, Pressable, View } from "react-native"
import { Tag } from "lucide-react-native"

interface CategoryButtonProps {
  title: string
  icon?: React.ReactNode
  onPress?: () => void
  isSelected?: boolean
}

export default function CategoryButton({ title, icon, onPress, isSelected = false }: CategoryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center justify-center px-4 py-3 m-5 rounded-full border ${
        isSelected ? "bg-primary border-primary" : "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      }`}
      style={({ pressed }) => [pressed && { opacity: 0.8 }]}
    >
      <Text className={`font-medium ${isSelected ? "text-white" : "text-gray-700 dark:text-gray-200"}`}>{title}</Text>
    </Pressable>
  )
}

