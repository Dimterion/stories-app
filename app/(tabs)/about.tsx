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
    url: "x.com/Dimterion",
  },
  {
    id: 1,
    icon: icons.gitHub,
    url: "github.com/Dimterion",
  },
  {
    id: 2,
    icon: icons.linkedIn,
    url: "www.linkedin.com/in/dmitrii-p/",
  },
  {
    id: 3,
    icon: icons.email,
    url: "www.dimterion.com/contact",
  },
  {
    id: 4,
    icon: icons.medium,
    url: "medium.com/@dimterion",
  },
  {
    id: 5,
    icon: icons.site,
    url: "dimterion.com",
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
        <View className="mx-4 flex flex-row items-center justify-around gap-2 border-b-2 py-4">
          <View className="max-w-[50vw]">
            <Text className="mb-4 text-2xl font-bold text-tertiary">
              About Stories App
            </Text>
            <Text className="pb-4 text-base text-tertiary">
              About section text goes here, telling about the app and the
              author.
            </Text>
          </View>
          <Image
            source={images.profilePic}
            className="border-1 max-h-[20vw] max-w-[20vw] rounded-full border-tertiary"
          />
        </View>
        <View className="mx-4 border-b-2 border-tertiary py-4">
          <Text className="mb-4 text-center text-2xl font-bold text-tertiary">
            Contact Links
          </Text>
          <FlatList
            data={links}
            renderItem={({ item }) => (
              <TouchableOpacity className="m-4 flex h-20 max-h-[20vw] w-20 max-w-[20vw] items-center justify-center rounded-md border-2 border-tertiary bg-accent shadow-md shadow-tertiary">
                <Link href={`https://${item.url}`} asChild target="_blank">
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
        <View className="my-8 flex items-center gap-4 pb-4 sm:pb-1">
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
