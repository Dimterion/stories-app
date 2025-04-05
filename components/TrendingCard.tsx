import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

const TrendingCard = ({
  story: { story_id, title, cover_img },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/stories/${story_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{ uri: cover_img }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full"></View>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
