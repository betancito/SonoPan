import { View, Text, Pressable, Modal } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

interface AudioSettingsModalProps {
  visible: boolean;
  onClose: () => void;
  onPlay: () => void
  onRepeat: (count: number) => void
  onTime: (interval: number) => void
  repeat: number | null;
  time: number | null;
  errorMessage: string | null;
  onErrorMessage: (message: string) => void;
}

export default function ProductModal({ 
  visible, 
  onClose, 
  repeat,
  onRepeat, 
  time,
  onTime,
  onPlay,
  errorMessage,
  onErrorMessage}: AudioSettingsModalProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-black/50">        
        <View className="bg-white rounded-3xl w-[320px] p-6">
          {/* Close button */}
          <View className="flex-row justify-end mb-4 pt-0">
            <Pressable className="" onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          </View>
          {/* Title and first set of options */}
          <Text className="text-center font-semibold text-lg mb-4">
            Cuantas veces deseas que se reproduzca el audio?
          </Text>

          <View className="flex-row flex-wrap justify-center gap-2 mb-6">
            <Pressable className="border-2 border-green-600 rounded-full px-4 py-2 active:bg-green-500" onPress={()=>onRepeat(5)}>
              <Text className="text-green-600 font-medium">5 veces</Text>
            </Pressable>

            <Pressable className="border-2 border-amber-500 rounded-full px-4 py-2 active:bg-amber-400" onPress={()=>onRepeat(10)}>
              <Text className="text-amber-500 font-medium">10 veces</Text>
            </Pressable>

            <Pressable className="border-2 border-red-500 rounded-full px-4 py-2 active:bg-red-400" onPress={()=>onRepeat(15)}>
              <Text className="text-red-500 font-medium">15 veces</Text>
            </Pressable>
          </View>

          {/* Second set of options */}
          <Text className="text-center font-semibold text-lg mb-4">Con que frecuencia lo deseas?</Text>

          <View className="flex-row flex-wrap justify-center gap-2 mb-6">
            <Pressable className="border-2 border-green-600 rounded-full px-4 py-2 active:bg-green-500" onPress={() => onTime(5)}>
              <Text className="text-green-600 font-medium">5 segundos</Text>
            </Pressable>

            <Pressable className="border-2 border-amber-500 rounded-full px-4 py-2 active:bg-amber-400" onPress={() => onTime(15)}>
              <Text className="text-amber-500 font-medium">15 segundos</Text>
            </Pressable>

            <Pressable className="border-2 border-red-500 rounded-full px-4 py-2 active:bg-red-400" onPress={() => onTime(30)}>
              <Text className="text-red-500 font-medium">30 segundos</Text>
            </Pressable>
          </View>

          {/* Play button */}
          <Pressable className="bg-slate-800 rounded-full py-3 px-6" onPress={onPlay}>
            <Text className="text-white text-center font-semibold text-lg">Reproducir</Text>
          </Pressable>

          {/* Error message */}
          {errorMessage && (
            <Text className="text-red-500 text-center mt-4 font-bold">{errorMessage}</Text>
          )}
        </View>
      </View>
    </Modal>
  )
}

