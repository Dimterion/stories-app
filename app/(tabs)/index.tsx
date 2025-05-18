import { FlatList, ScrollView, Text, View } from "react-native";

import { stories } from "@/assets/texts/stories";

import StoryCard from "@/components/StoryCard";
import FeaturedCard from "@/components/FeaturedCard";

const HomeScreen = () => {
  const featuredStories = stories.filter((story) => story.featured);

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 60 }}
      >
        <Text
          style={{ fontFamily: "AmaticSC-Bold" }}
          className="w-full bg-secondary p-4 text-center text-4xl text-tertiary shadow-md shadow-tertiary sm:text-4xl"
        >
          Stories App
        </Text>

        <View className="mb-3 mt-6 flex-1">
          {featuredStories?.length > 0 && (
            <View>
              <View className="mx-1 mb-4 border-b-2">
                <Text
                  style={{ fontFamily: "Amaranth-Bold" }}
                  className="mb-3 text-center text-2xl text-tertiary"
                >
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
                />
              </View>
              <Text
                style={{ fontFamily: "Amaranth-Bold" }}
                className="text-center text-3xl text-tertiary"
              >
                All Stories
              </Text>
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
              gap: 40,
              marginBottom: 35,
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
