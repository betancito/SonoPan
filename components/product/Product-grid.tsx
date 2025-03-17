import { View, ScrollView } from "react-native"
import React, { useState } from "react"
import ProductCard from "./Product-card"
import { Audio } from "expo-av"
import ProductModal from "./Product-modal"

// Sample data
const products = [
  { id: "1", title: "Pan de $800", image: require("../../assets/images/products/bread.png"), audio: require("../../assets/audio/test.mp3"), category_id: "PANES"},
  { id: "2", title: "Croissant $600", image: require("../../assets/images/products/croissant.png"), audio: require("../../assets/audio/test.mp3"), category_id: "PRODUCTO QUESO" },
  { id: "3", title: "Muffin $500", image: require("../../assets/images/products/muffin.png"), audio: require("../../assets/audio/test.mp3"), category_id: "FRITOS" },
  { id: "4", title: "Donut $450", image: require("../../assets/images/products/donut.png"), audio: require("../../assets/audio/test.mp3"), category_id: "DESAYUNOS" },
  { id: "5", title: "Donut $450", image: require("../../assets/images/products/donut.png"), audio: require("../../assets/audio/test.mp3"), category_id: "ALMUERZOS" },
  { id: "6", title: "Donut $450", image: require("../../assets/images/products/donut.png"), audio: require("../../assets/audio/test.mp3"), category_id: "VARIOS" },
]

// Product Props
interface ProductGridProps {
  id : string;
  title : string;
  image : any;
  audio : any;
  category_id: string;
}

export default function ProductGrid({ category_id }: ProductGridProps) {
  //Audio state
  const [audio, setAudio] = useState<Audio.Sound | null>(null);

  //Modal visivility
  const [modalVisible, setModalVisible] = useState(false);

  //Repetition Count
  const [repetitionCount, setRepetitionCount] = useState<number | null>(null);

  //Frecuency
  const [frecuency, setFrecuency] = useState<number | null>(null);

  //Selected Product
  const [selectedProduct, setSelectedProduct] =
    useState<ProductGridProps | null>(null);

  //Error message
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  //helper for frequency time
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  //Wait for the audio to finish promise
  const waitForAudioToFinish = (sound: Audio.Sound) => {
    return new Promise<void>((resolve) => {
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && !status.isBuffering && status.didJustFinish) {
          resolve();
        }
      }
      );
    });
  };

  //Handle Pressed Product
  const handleProductSelection = (product: ProductGridProps) => {
    setSelectedProduct(product);
    setModalVisible(true);

    //In case products have been selected before we reset the values
    setFrecuency(null);
    setRepetitionCount(null);
    setErrorMessage(null);
  };

  //Handle Play
  const handlePlay = async () => {
    if (!selectedProduct || !repetitionCount || !frecuency) {
      setErrorMessage(
        "Por favor selecciona un numero de repeticiones y una frecuencia"
      );
      return;
    }
    
    //If there is an audio playing we stop it
    if (audio) {
      await audio.stopAsync();
      await audio.unloadAsync();
    }

    //Load the audio
    const { sound } = await Audio.Sound.createAsync(
      selectedProduct.audio
    );
    setAudio(sound);

    //Play the audio for the selected amount of times
    for (let i = 0; i < repetitionCount; i++) {
      //Play the audio
      await sound.replayAsync();
      //Wait for the audio to finish
      await waitForAudioToFinish(sound);
      //wait for the frecuency interval
      await sleep(frecuency * 1000);
    };

    //Unload the audio after it has finished playing
    await sound.unloadAsync();
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View className="flex-row flex-wrap justify-between p-4 gap-y-4">
        {products.map((product) => {
          if (product.category_id === category_id)
            return (
              <ProductCard
                key={product.id}
                imageSource={product.image}
                title={product.title}
                onPress={() => handleProductSelection(product)}
              />
            );
        })}
      </View>
      <ProductModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        onRepeat={setRepetitionCount} 
        onTime={setFrecuency}
        repeat = {repetitionCount}
        time = {frecuency}
        errorMessage={errorMessage}
        onErrorMessage={setErrorMessage}
        onPlay={handlePlay} 
        
        />
    </ScrollView>
  );
}

