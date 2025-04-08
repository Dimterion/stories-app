import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import useFetch from "@/services/useFetch";
import { getTrendingStories } from "@/services/appwrite";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { stories } from "@/assets/texts/stories";

import SearchBar from "@/components/SearchBar";
import StoryCard from "@/components/StoryCard";
import TrendingCard from "@/components/TrendingCard";

const HomeScreen = () => {
  const router = useRouter();

  const { data: trendingStories } = useFetch(getTrendingStories);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 5 }}
      >
        <Image source={icons.logo} className="size-5 my-5 mx-auto" />

        {stories || trendingStories ? (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a story"
            />

            {trendingStories && (
              <View className="mt-10">
                <Text className="text-lg text-white font-bold mb-3">
                  Trending Stories
                </Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="mb-4 mt-3"
                  data={trendingStories}
                  contentContainerStyle={{
                    gap: 26,
                  }}
                  renderItem={({ item, index }) => (
                    <TrendingCard story={item} index={index} />
                  )}
                  keyExtractor={(item) => item.story_id.toString()}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                />
              </View>
            )}

            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Stories
              </Text>

              <FlatList
                data={stories}
                renderItem={({ item }) => <StoryCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        ) : (
          <ActivityIndicator
            size="large"
            color="#0000FF"
            className="mt-10 self-center"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
