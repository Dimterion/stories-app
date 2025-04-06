import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { fetchStoryDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import defaultImg from "@/assets/images/logo.png";

const StoryDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const { data: story } = useFetch(() => fetchStoryDetails(id as string));

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={story?.cover_img || defaultImg}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">
            {story?.title || "Title"}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoryDetailsScreen;
