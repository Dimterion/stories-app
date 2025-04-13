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

interface StoryInfoProps {
  label: string;
  value?: string | number | null;
}

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

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
        <View>
          <Image
            source={{
              uri: story?.poster_path
                ? `${process.env.EXPO_PUBLIC_POSTER_IMG}${story?.poster_path}`
                : process.env.EXPO_PUBLIC_PLACEHOLDER_IMG,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{story?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">
              {story?.release_date?.split("-")[0]} •
            </Text>
            <Text className="text-light-200 text-sm">{story?.runtime}m</Text>
          </View>

          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />

            <Text className="text-white font-bold text-sm">
              {Math.round(story?.vote_average ?? 0)}/10
            </Text>

            <Text className="text-light-200 text-sm">
              ({story?.vote_count} votes)
            </Text>
          </View>

          <StoryInfo label="Overview" value={story?.overview} />
          <StoryInfo
            label="Genres"
            value={story?.genres?.map((g) => g.name).join(" • ") || "N/A"}
          />

          <View className="flex flex-row justify-between w-1/2"></View>
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoryDetailsScreen;
