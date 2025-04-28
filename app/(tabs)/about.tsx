import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { stories } from "@/assets/texts/stories";

import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";

const links = [
  {
    id: 0,
    icon: icons.x,
  },
  {
    id: 1,
    icon: icons.gitHub,
  },
  {
    id: 2,
    icon: icons.linkedIn,
  },
  {
    id: 3,
    icon: icons.email,
  },
  {
    id: 4,
    icon: icons.medium,
  },
  {
    id: 5,
    icon: icons.site,
  },
];

const AboutScreen = () => {
  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 75 }}
      >
        <Header />
        <View className="mx-4 my-2 flex flex-row items-center justify-around gap-2 border-b-2 sm:pb-4">
          <View className="max-w-[40vw]">
            <Text className="mb-4 text-xl font-bold text-tertiary md:text-2xl">
              About Stories App
            </Text>
            <Text className="pb-4 text-base text-tertiary">
              About section text goes here, telling about the app and the
              author.
            </Text>
          </View>
          <Image
            source={images.profilePic}
            className="border-1 max-h-[45vw] max-w-[45vw] rounded-full border-tertiary"
          />
        </View>
        <View className="mx-4 my-2 border-b-2 border-tertiary pb-2">
          <Text className="text-center text-xl font-bold text-tertiary md:text-2xl">
            Contact Links
          </Text>
          <FlatList
            className="my-6"
            data={links}
            renderItem={({ item }) => (
              <TouchableOpacity className="m-2 flex h-16 w-16 items-center justify-center rounded-md border-2 border-tertiary bg-accent shadow-md shadow-tertiary sm:m-4">
                <Link href={`/`} asChild>
                  <Image source={item.icon} />
                </Link>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "center",
            }}
            scrollEnabled={false}
          />
        </View>
        <View className="mt-6 flex items-center gap-4">
          <StoryCard {...stories[0]} />
          <View className="flex flex-row gap-1">
            <Text className="text-base font-bold">Check the latest story</Text>
            <Image source={icons.vector} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;
