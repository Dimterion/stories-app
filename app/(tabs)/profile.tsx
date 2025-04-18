import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex flex-row p-5 bg-secondary justify-between shadow-tertiary shadow-md mb-4">
        <TouchableOpacity
          className="bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center px-3 border-2 border-tertiary shadow-tertiary shadow-md"
          onPress={router.back}
        >
          <Image
            source={icons.arrow}
            className="rotate-180"
            tintColor="#1B263B"
          />
        </TouchableOpacity>
        <Text className="text-tertiary text-4xl font-bold">Stories App</Text>
      </View>
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
