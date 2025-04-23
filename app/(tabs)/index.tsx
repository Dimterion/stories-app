import { FlatList, ScrollView, Text, View } from "react-native";

import { stories } from "@/assets/texts/stories";

import StoryCard from "@/components/StoryCard";
import TrendingCard from "@/components/TrendingCard";

const HomeScreen = () => {
  const trendingStories = [stories[0], stories[1], stories[2]];

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

        <View className="flex-1 m-5">
          {trendingStories && trendingStories.length > 0 && (
            <View className="border-b-2 mb-4">
              <Text className="text-lg text-tertiary font-bold mb-3 text-center">
                Latest Stories
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
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View className="w-4" />}
              />
            </View>
          )}

          <Text className="text-lg text-tertiary font-bold mb-3 text-center">
            All Stories
          </Text>
          <FlatList
            data={stories}
            renderItem={({ item }) => <StoryCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
            className="mt-2 pb-16"
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
