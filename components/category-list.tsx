import { useState } from "react"
import { View, ScrollView } from "react-native"
import CategoryButton from "./category-button"
import { ShoppingBag, Coffee, Utensils, Plane, Film, Music } from "lucide-react-native"

const categories = [
  { id: "1", title: "Shopping", icon: <ShoppingBag size={18} /> },
  { id: "2", title: "Coffee", icon: <Coffee size={18} /> },
  { id: "3", title: "Food", icon: <Utensils size={18} /> },
  { id: "4", title: "Travel", icon: <Plane size={18} /> },
  { id: "5", title: "Movies", icon: <Film size={18} /> },
  { id: "6", title: "Music", icon: <Music size={18} /> },
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
            icon={category.icon}
            isSelected={selectedCategory === category.id}
            onPress={() => setSelectedCategory(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

