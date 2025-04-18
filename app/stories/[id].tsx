import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import useFetch from "@/services/useFetch";
import { fetchStoryDetails } from "@/services/api";

import { icons } from "@/constants/icons";
import Header from "@/components/Header";
import StoryInfo from "@/components/StoryInfo";

const StoryDetailsScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: story, loading } = useFetch(() =>
    fetchStoryDetails(id as string)
  );

  if (loading) return <ActivityIndicator className="bg-primary flex-1" />;

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Header />
        <View>
          <Image
            source={{
              uri: story?.poster_path
                ? `${process.env.EXPO_PUBLIC_POSTER_IMG}${story?.poster_path}`
                : process.env.EXPO_PUBLIC_PLACEHOLDER_IMG,
            }}
            className="w-full h-96 mx-auto"
            resizeMode="contain"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-tertiary font-bold text-4xl mx-auto">
            {story?.title}
          </Text>

          <StoryInfo label="Overview" value={story?.overview} />

          <StoryInfo
            label="Production Companies"
            value={
              story?.production_companies.map((c) => c.name).join(" • ") ||
              "N/A"
            }
          ></StoryInfo>
        </View>
        <TouchableOpacity
          className="my-5 mx-auto bg-accent rounded-lg py-3 px-5 flex flex-row items-center justify-between border-2 border-tertiary shadow-md shadow-tertiary w-96 max-w-[90vw]"
          onPress={router.back}
        >
          <Image
            source={icons.arrow}
            className="size-5 mr-1 mt-0.5 rotate-180"
            tintColor="#1B263B"
          />
          <Text className="text-tertiary font-semibold text-base">
            Back to the Stories List
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default StoryDetailsScreen;
