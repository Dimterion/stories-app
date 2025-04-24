import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { stories } from "@/assets/texts/stories";

import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";

const links = [
  {
    icon: icons.x,
  },
  {
    icon: icons.gitHub,
  },
  {
    icon: icons.linkedIn,
  },
  {
    icon: icons.email,
  },
  {
    icon: icons.medium,
  },
  {
    icon: icons.site,
  },
];

const AboutScreen = () => {
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
        <View className="grid grid-cols-3 place-items-center gap-4 my-4">
          {links.map((link) => (
            <TouchableOpacity className="border-2 border-tertiary rounded-md bg-accent flex items-center justify-center shadow-md shadow-tertiary w-16 h-16">
              <Link href={`/`} asChild>
                <Image source={link.icon} />
              </Link>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View className="flex items-center gap-4 mt-4">
        <StoryCard {...stories[0]} />
        <Text className="text-base font-bold">Check the latest story</Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
