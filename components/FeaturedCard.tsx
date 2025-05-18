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
      <TouchableOpacity className="relative max-h-[400px] w-[80vw] sm:max-w-[350px]">
        <Image
          source={poster_path}
          className="max-h-[350px] w-full max-w-[80vw] rounded-md border-2 border-tertiary shadow-md shadow-tertiary sm:max-w-[350px]"
          resizeMode="cover"
        />
        <Text
          style={{ fontFamily: "Amaranth-Bold" }}
          className="mt-3 text-2xl text-tertiary"
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default FeaturedCard;
