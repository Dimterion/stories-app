import { Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const FeaturedCard = ({
  story: { id, title, poster_path },
}: FeaturedCardProps) => {
  return (
    <Link
      href={`/stories/${id}`}
      asChild
      accessibilityLabel="Open featured story"
    >
      <TouchableOpacity className="relative">
        <Image
          source={poster_path}
          className="max-w-[80vw] rounded-md"
          resizeMode="cover"
        />
        <Text
          style={{ fontFamily: "Amaranth-Bold" }}
          className="text-xl text-tertiary"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default FeaturedCard;
