import {Text, View} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ProductGrid from '@/components/product/Product-grid';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Products() {
const { id } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <View className='pt-5 pb-5 w-max m-auto'>
                <Text className='text-5xl text-white font-extrabold'>{id}</Text>
            </View>
            <ProductGrid category_id={id}/>
        </SafeAreaView>
    )   
}