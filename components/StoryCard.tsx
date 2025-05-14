import { Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import placeholderImg from "@/assets/images/placeholder_img.png";

const StoryCard = ({ id, title, poster_path }: StoryCardProps) => {
  return (
    <Link
      href={`/stories/${id}`}
      asChild
      className="flex items-center rounded-md border-2 border-tertiary bg-accent shadow-md shadow-tertiary"
      accessibilityLabel="Open story"
    >
      <TouchableOpacity className="max-h-[400px] w-[90%] max-w-[80vw] sm:max-w-[350px]">
        <Image
          source={poster_path || placeholderImg}
          className="max-h-[350px] w-full max-w-[80vw] rounded-t border-x-2 border-tertiary sm:max-w-[350px]"
          resizeMode="cover"
        />
        <Text
          style={{ fontFamily: "Amaranth-Bold" }}
          className="p-2 text-2xl text-tertiary"
          numberOfLines={1}
        >
          {title || "N/A"}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default StoryCard;
