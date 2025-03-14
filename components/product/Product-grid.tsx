import { View, ScrollView } from "react-native"
import ProductCard from "./Product-card"

// Sample data
const products = [
  { id: "1", title: "Pan de $800", image: require("../../assets/images/products/bread.png"), audio: require("../../assets/audio/test.mp3"), category_id: "PANES"},
  { id: "2", title: "Croissant $600", image: require("../../assets/images/products/croissant.png"), audio: require("../../assets/audio/test.mp3"), category_id: "PRODUCTO QUESO" },
  { id: "3", title: "Muffin $500", image: require("../../assets/images/products/muffin.png"), audio: require("../../assets/audio/test.mp3"), category_id: "FRITOS" },
  { id: "4", title: "Donut $450", image: require("../../assets/images/products/donut.png"), audio: require("../../assets/audio/test.mp3"), category_id: "DESAYUNOS" },
  { id: "5", title: "Donut $450", image: require("../../assets/images/products/donut.png"), audio: require("../../assets/audio/test.mp3"), category_id: "ALMUERZOS" },
  { id: "6", title: "Donut $450", image: require("../../assets/images/products/donut.png"), audio: require("../../assets/audio/test.mp3"), category_id: "VARIOS" },
]

interface ProductGridProps {
  category_id: string
}
export default function ProductGrid({ category_id }: ProductGridProps) {
  return (
    <ScrollView>
      <View className="flex-row flex-wrap justify-between p-4 gap-y-4">
        {products.map((product) => {if (product.category_id === category_id) return (
          <ProductCard key={product.id} imageSource={product.image} title={product.title} />
          )}
        )}
      </View>
    </ScrollView>
  )
}

