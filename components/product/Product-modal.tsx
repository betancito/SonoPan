import { View, Text, Pressable, Modal } from "react-native"

interface AudioSettingsModalProps {
  visible: boolean
  onClose: () => void
}

export default function ProductModal({ visible, onClose }: AudioSettingsModalProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-3xl w-[320px] p-6">
          {/* Title and first set of options */}
          <Text className="text-center font-semibold text-lg mb-4">
            Cuantas veces deseas que se reproduzca el audio?
          </Text>

          <View className="flex-row flex-wrap justify-center gap-2 mb-6">
            <Pressable className="border-2 border-green-600 rounded-full px-4 py-2">
              <Text className="text-green-600 font-medium">5 veces</Text>
            </Pressable>

            <Pressable className="border-2 border-amber-500 rounded-full px-4 py-2">
              <Text className="text-amber-500 font-medium">10 veces</Text>
            </Pressable>

            <Pressable className="border-2 border-red-500 rounded-full px-4 py-2">
              <Text className="text-red-500 font-medium">15 veces</Text>
            </Pressable>
          </View>

          {/* Second set of options */}
          <Text className="text-center font-semibold text-lg mb-4">Con que frecuencia lo deseas?</Text>

          <View className="flex-row flex-wrap justify-center gap-2 mb-6">
            <Pressable className="border-2 border-green-600 rounded-full px-4 py-2">
              <Text className="text-green-600 font-medium">15 segundos</Text>
            </Pressable>

            <Pressable className="border-2 border-amber-500 rounded-full px-4 py-2">
              <Text className="text-amber-500 font-medium">30 segundos</Text>
            </Pressable>

            <Pressable className="border-2 border-red-500 rounded-full px-4 py-2">
              <Text className="text-red-500 font-medium">1 minuto</Text>
            </Pressable>
          </View>

          {/* Play button */}
          <Pressable className="bg-slate-800 rounded-full py-3 px-6">
            <Text className="text-white text-center font-semibold text-lg">Reproducir</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

