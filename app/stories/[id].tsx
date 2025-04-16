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
        <View className="flex flex-row p-5 bg-secondary justify-between">
          <TouchableOpacity
            className="bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center px-3 border-2 border-tertiary"
            onPress={router.back}
          >
            <Image
              source={icons.arrow}
              className="rotate-180"
              tintColor="#1B263B"
            />
          </TouchableOpacity>
          <Text className="text-tertiary text-4xl font-bold">Stories App</Text>
        </View>
        <View>
          <Image
            source={{
              uri: story?.poster_path
                ? `${process.env.EXPO_PUBLIC_POSTER_IMG}${story?.poster_path}`
                : process.env.EXPO_PUBLIC_PLACEHOLDER_IMG,
            }}
            className="w-full max-w-96 h-[550px] max-h-96 m-auto"
            resizeMode="contain"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-tertiary font-bold text-xl">
            {story?.title}
          </Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-tertiary text-sm">
              {story?.release_date?.split("-")[0]} •
            </Text>
            <Text className="text-tertiary text-sm">{story?.runtime}m</Text>
          </View>

          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />

            <Text className="text-white font-bold text-sm">
              {Math.round(story?.vote_average ?? 0)}/10
            </Text>

            <Text className="text-white text-sm">
              ({story?.vote_count} votes)
            </Text>
          </View>

          <StoryInfo label="Overview" value={story?.overview} />
          <StoryInfo
            label="Genres"
            value={story?.genres?.map((g) => g.name).join(" • ") || "N/A"}
          />

          <View className="flex flex-row justify-between w-1/2">
            <StoryInfo
              label="Budget"
              value={`$${(story?.budget ?? 0) / 1_000_000} million`}
            />
            <StoryInfo
              label="Revenue"
              value={`$${Math.round(
                (story?.revenue ?? 0) / 1_000_000
              )} million`}
            />
          </View>
          <StoryInfo
            label="Production Companies"
            value={
              story?.production_companies.map((c) => c.name).join(" • ") ||
              "N/A"
            }
          ></StoryInfo>
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50 border-2 border-tertiary"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#1B263B"
        />
        <Text className="text-tertiary font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoryDetailsScreen;
