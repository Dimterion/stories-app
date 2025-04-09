import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const StoryCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Story) => {
  return (
    <Link href={`/stories/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `${process.env.EXPO_PUBLIC_POSTER_IMG}${poster_path}`
              : process.env.EXPO_PUBLIC_PLACEHOLDER_IMG,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
          <View className="flex-row flex-wrap gap-3 items-center justify-between">
            <Text className="text-xs text-light-300 font-medium">
              {release_date?.split("-")[0]}
            </Text>
            <Text className="text-xs font-semibold text-light-300 uppercase"></Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default StoryCard;
