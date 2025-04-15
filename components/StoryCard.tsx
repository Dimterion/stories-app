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
    <Link
      href={`/stories/${id}`}
      asChild
      className="border-2 border-tertiary rounded-md bg-accent flex items-center"
    >
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `${process.env.EXPO_PUBLIC_POSTER_IMG}${poster_path}`
              : process.env.EXPO_PUBLIC_PLACEHOLDER_IMG,
          }}
          className="w-full h-52 border-b-2 border-tertiary rounded-t"
          resizeMode="cover"
        />
        <Text
          className="text-sm font-bold text-tertiary mt-2"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-tertiary font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-tertiary font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default StoryCard;
