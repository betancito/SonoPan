import { View, Text,ScrollView, Pressable} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryList from '@/components/category/category-list';
import ProductGrid from '@/components/product/Product-grid';
import ProductModal from '@/components/product/Product-modal';
import { Link } from 'expo-router';


const index = () => {
    const [seeModal, setSeeModal] = useState(false)
    return (
        <SafeAreaView>
                <View className='pt-5 pb-5 w-max m-auto'>
                    <Text className='text-5xl text-white font-extrabold'>CATEGORIAS</Text>
                </View>
                <ScrollView>
                    <CategoryList/>
                </ScrollView>
        </SafeAreaView>
    );
};

export default index;