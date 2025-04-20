import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";
import Header from "@/components/Header";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <Header />
      <View className="flex justify-around items-center flex-row gap border-b-2 m-4 py-4">
        <View>
          <Text className="font-bold text-2xl text-tertiary">
            About Stories App
          </Text>
          <Text className="text-tertiary text-base">
            About section text goes here, telling about the app and the author.
          </Text>
        </View>
        <Image
          source={icons.person}
          className="border-2 border-tertiary rounded-full"
          tintColor="#fff"
        />
      </View>
      <View>
        <View>
          <Text className="text-tertiary text-2xl text-center font-bold">
            Contact Links
          </Text>
          <View className="mx-4">
            <Link
              href={`/`}
              asChild
              className="border-2 border-tertiary rounded-md bg-accent flex items-center shadow-md shadow-tertiary w-4 py-2 px-4"
            >
              <TouchableOpacity>
                <Text>X</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
