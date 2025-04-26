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
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Header />
        <View>
          <Image
            source={stories[storyId]?.poster_path}
            className="mx-auto h-96 w-full max-w-[90vw]"
            resizeMode="contain"
          />
        </View>

        <View className="mt-5 flex-col items-start justify-center px-5">
          <Text className="mx-auto text-4xl font-bold text-tertiary">
            {stories[storyId]?.title}
          </Text>

          <StoryInfo label="" value={stories[storyId]?.overview} />

          <StoryInfo
            label="Tags"
            value={
              stories[storyId]?.tags.map((c: string) => c).join(" • ") || "N/A"
            }
          ></StoryInfo>
        </View>
        <TouchableOpacity
          className="mx-auto mt-10 flex w-96 max-w-[90vw] flex-row items-center justify-between rounded-lg border-2 border-tertiary bg-accent px-5 py-3 shadow-md shadow-tertiary"
          onPress={router.back}
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
