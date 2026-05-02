import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react'
import {icons} from "@/constants/icons";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "@/constants/images";

const Saved = () => {
  return (
      <SafeAreaView className="bg-primary flex-1 px-10">
          <View className="flex-row items-center justify-between px-5 py-3">

              <View className="flex-row items-center gap-2">
                  <Image
                      source={icons.logo}
                      className="w-5 h-5"
                      resizeMode="cover"
                  />
                  <Text className="text-accent font-bold text-lg">MovieHub</Text>
              </View>

              <TouchableOpacity className="border border-accent rounded-full p-1">
                  <Image
                      source={icons.user}
                      className="w-5 h-5"
                      tintColor="#fff"
                      resizeMode="contain"
                  />
              </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between mt-20">
              <Text className="text-white text-xl font-bold">Saved</Text>
              <Text className="text-sm text-white border border-accent rounded-full px-2">12 Movies</Text>
          </View>

          <ScrollView className="w-full mt-10">
             <TouchableOpacity className="w-[50%] rounded-3xl">
                 <Image
                     className="h-52 w-[100%] rounded-3xl border border-gray-500"
                     source={images.movieSampleCard}
                     resizeMode="cover"
                 />
                 <View className="flex-col items-center justify-between">
                     <Text className="text-white text-lg mt-1">
                         Iron Man
                     </Text>
                     <Text className="text-white text-sm">
                         2026
                     </Text>
                 </View>
             </TouchableOpacity>
          </ScrollView>

      </SafeAreaView>
  );
};

export default Saved;