import { FlatList, ScrollView, Text, View } from "react-native";

import { stories } from "@/assets/texts/stories";

import StoryCard from "@/components/StoryCard";
import FeaturedCard from "@/components/FeaturedCard";

const HomeScreen = () => {
  const featuredStories = stories.filter((story) => story.featured);

  return (
    <View className="flex-1 bg-primary pb-16">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 5 }}
      >
        <Text className="w-full bg-secondary p-4 text-center text-4xl font-bold text-tertiary shadow-md shadow-tertiary">
          Stories App
        </Text>

        <View className="my-5 flex-1">
          {featuredStories && featuredStories.length > 0 && (
            <View className="mx-1 mb-4 border-b-2">
              <Text className="mb-3 text-center text-lg font-bold text-tertiary">
                Featured Stories
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-4 mt-3"
                data={featuredStories}
                contentContainerStyle={{
                  gap: 20,
                }}
                renderItem={({ item, index }) => (
                  <FeaturedCard story={item} index={index} />
                )}
                keyExtractor={(item) => item.id.toString()}
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
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 50,
              marginBottom: 50,
            }}
            className="mt-6"
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
