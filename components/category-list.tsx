import { useState } from "react"
import { View, ScrollView } from "react-native"
import CategoryButton from "./category-button"

const categories = [
  { id: "1", title: "Exmaple" }
]

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <View className="py-4">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        className="gap-x-3"
      >
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            title={category.title}
            isSelected={selectedCategory === category.id}
            onPress={() => setSelectedCategory(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

