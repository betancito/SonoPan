import { useState } from "react"
import { View, ScrollView } from "react-native"
import CategoryButton from "./category-button"

const categories = [
  { id: "1", title: "PANES" },
  { id: "2", title: "PRODUCTO QUESO" },
  { id: "3", title: "FRITOS" },
  { id: "4", title: "DESAYUNOS" },
  { id: "5", title: "ALMUERZOS" },
  { id: "6", title: "VARIOS" },
]



export default function CategoryList() {

  return (
    <View className="py-4">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        className="gap-x-3"
      >
        {categories.map((category) => (
          <CategoryButton
            category_id = {category.id}
            key={category.id}
            title={category.title}
          />
        ))}
      </ScrollView>
    </View>
  )
}

