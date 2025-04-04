import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";
import defaultImg from "@/assets/images/logo.png";

const StoryCard = ({
  id,
  title,
  cover_img,
  vote_average,
  publish_date,
  tag,
}: Story) => {
  return (
    <Link href={`/stories/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={cover_img || defaultImg}
          className="w-full h-52 max-w-[20vw] max-h-[20vw] rounded-lg"
          resizeMode="cover"
        />
        <Text
          className="text-sm font-bold text-white mt-3 mb-1"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
          <View className="flex-row flex-wrap gap-3 items-center justify-between">
            <Text className="text-xs text-light-300 font-medium">
              {publish_date?.split("-")[0]}
            </Text>
            <Text className="text-xs font-semibold text-light-300 uppercase">
              {tag}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default StoryCard;
