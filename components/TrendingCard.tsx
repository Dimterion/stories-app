import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";

const TrendingCard = ({
  story: { story_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/stories/${story_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{ uri: poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
          <Image
            source={images.rankingGradient}
            className="size-1"
            resizeMode="cover"
          />
          <Text className="text-white text-6xl">{index + 1}</Text>
          <Text
            className="text-sm font-bold mt-2 text-light-200"
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
