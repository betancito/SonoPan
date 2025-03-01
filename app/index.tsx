import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryButton from '@/components/category-button';
import CategoryList from '@/components/category-list';

const index = () => {
    return (
        <SafeAreaView className='bg-purple-400'>
            <View>
                <Text className='text-2xl text-red-600'>Components to be used</Text>
                <CategoryList/>
            </View>
            <View className='viewBox' />
        </SafeAreaView>
    );
};

export default index;