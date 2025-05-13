import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { stories } from "@/assets/texts/stories";

import { icons } from "@/constants/icons";
import Header from "@/components/Header";
import StoryInfo from "@/components/StoryInfo";

const StoryDetailsScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const storyId =
    typeof id === "string"
      ? parseInt(id, 10)
      : Array.isArray(id)
        ? parseInt(id[0], 10)
        : id;

  return (
    <View className="flex-1 bg-primary pb-2">
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <Header />
        <View className="max-h-[370px] sm:max-h-[550px]">
          <Image
            source={stories[storyId]?.poster_path}
            className="mx-auto mt-4 max-h-[350px] max-w-[90vw] rounded-md sm:max-h-[500px]"
            resizeMode="cover"
          />
        </View>

        <View className="flex-col items-start justify-center px-5 sm:px-10">
          <Text className="mx-auto mb-4 mt-5 text-center text-3xl font-bold text-tertiary sm:text-4xl">
            {stories[storyId]?.title}
          </Text>

          <StoryInfo value={stories[storyId]?.text} />

          {stories[storyId].tags?.length > 0 && (
            <StoryInfo
              label="Tags"
              value={
                stories[storyId]?.tags.map((c: string) => c).join(" • ") ||
                "N/A"
              }
            />
          )}
        </View>
        <TouchableOpacity
          accessibilityLabel="Back to the Stories List"
          className="w-70 mx-auto mt-8 flex max-w-[90vw] flex-row items-center justify-between rounded-md border-2 border-tertiary bg-accent p-3 shadow-md shadow-tertiary"
          onPress={() => router.push("/")}
        >
          <Image
            source={icons.arrow}
            className="mr-1 mt-0.5 size-5 rotate-180"
            tintColor="#1B263B"
          />
          <Text className="text-base font-semibold text-tertiary">
            Back to the Stories List
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default StoryDetailsScreen;
