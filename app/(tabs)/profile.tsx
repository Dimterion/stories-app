import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import Header from "@/components/Header";

const links = ["X", "G", "M", "I", "W", "E"];

const ProfileScreen = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Header />
      <View className="flex justify-around items-center flex-row gap-2 border-b-2 m-2 sm:pb-4">
        <View className="max-w-[45vw]">
          <Text className="font-bold text-xl md:text-2xl text-tertiary mb-4">
            About Stories App
          </Text>
          <Text className="text-tertiary text-base pb-4">
            About section text goes here, telling about the app and the author.
          </Text>
        </View>
        <Image
          source={images.profilePic}
          className="border-1 border-tertiary rounded-full max-w-[45vw] max-h-[45vw]"
        />
      </View>
      <View className="border-b-2 border-tertiary m-2 pb-2">
        <Text className="text-tertiary text-xl md:text-2xl text-center font-bold">
          Contact Links
        </Text>
        <View className="flex flex-row flex-wrap gap-4 justify-center m-4">
          {links.map((link) => (
            <Link
              href={`/`}
              asChild
              className="border-2 border-tertiary rounded-md bg-accent flex items-center shadow-md shadow-tertiary w-4 py-2 px-4"
            >
              <TouchableOpacity>
                <Text>{link}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </View>
      <View className="flex items-center gap-4 mt-4">
        <TouchableOpacity>
          <Link
            href={`/`}
            asChild
            className="border-2 border-tertiary rounded-md bg-accent flex items-center shadow-md shadow-tertiary w-4 py-2 px-4"
          >
            <Image
              source={images.placeholderImg}
              className="border-2 border-tertiary rounded-full"
            />
          </Link>
        </TouchableOpacity>
        <Text className="text-base font-bold">Check the latest story</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
