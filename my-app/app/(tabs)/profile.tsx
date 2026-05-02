import {View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '@/constants/icons';

const Profile = () => {
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

              <TouchableOpacity>
                  <Image
                      source={icons.config}
                      className="w-6 h-6"
                      tintColor="#fff"
                      resizeMode="contain"
                  />
              </TouchableOpacity>

          </View>

          <View className="flex-col items-center justify-center">
              <View className="flex-col items-center gap-2">
                  <View className="border-2 p-3 rounded-full">
                      <Image
                          source={icons.user}
                          className="w-20 h-20"
                          tintColor="#fff"
                          resizeMode="contain"
                      />
                  </View>
                  <View className="absolute bottom-5 right-0 rounded-full p-1">
                      <Image
                          source={icons.pen}
                          className="w-5 h-5 rounded-full"
                          resizeMode="contain"
                      />
                  </View>
              </View>
              <View>
                  <Text className="text-white text-lg font-bold">John Doe</Text>
              </View>
              <View>
                  <Text className="text-white text-sm">johndoe@moviehub</Text>
              </View>
          </View>

      </SafeAreaView>
  );
};

export default Profile;