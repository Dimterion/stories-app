import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";
import Header from "@/components/Header";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <Header />
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
