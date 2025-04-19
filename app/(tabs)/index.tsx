import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";

import useFetch from "@/services/useFetch";
import { fetchStories } from "@/services/api";
import { getTrendingStories } from "@/services/appwrite";

import StoryCard from "@/components/StoryCard";
import TrendingCard from "@/components/TrendingCard";

const HomeScreen = () => {
  const {
    data: trendingStories,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingStories);

  const {
    data: stories,
    loading: storiesLoading,
    error: storiesError,
  } = useFetch(() => fetchStories({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 5 }}
      >
        <Text className="text-tertiary text-center text-4xl font-bold pt-4 pb-6 w-full bg-secondary shadow-tertiary shadow-md">
          Stories App
        </Text>

        {storiesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000FF"
            className="mt-10 self-center"
          />
        ) : storiesError || trendingError ? (
          <Text>Error: {storiesError?.message || trendingError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            {trendingStories && trendingStories.length > 0 && (
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

            <FlatList
              data={stories}
              renderItem={({ item }) => <StoryCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "center",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-16"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
