import { View, Text, Image, Pressable, type ImageSourcePropType } from "react-native"

interface ProductCardProps {
  imageSource: ImageSourcePropType
  title: string
  onPress: () => void
}

export default function ProductCard({ imageSource, title, onPress}: ProductCardProps) {
  return (
    <Pressable className="bg-slate-800 p-0.5 rounded-xl w-32" onPress={onPress}>
      <View className="bg-white rounded-lg overflow-hidden">
        <View className="p-3">
          <Image source={imageSource} className="w-full h-20 object-contain" resizeMode="contain" />
        </View>
        <Text className="text-center font-medium py-2 px-1 text-black">{title}</Text>
      </View>
    </Pressable>
  )
}

