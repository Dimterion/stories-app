import { Image, Text, TouchableOpacity } from "react-native";

import { Link } from "expo-router";

const StoryCard = ({ id, title, poster_path }: Story) => {
  return (
    <Link
      href={`/stories/${id}`}
      asChild
      className="flex items-center rounded-md border-2 border-tertiary bg-accent shadow-md shadow-tertiary"
    >
      <TouchableOpacity className="w-[90%] max-w-[350px]">
        <Image
          source={poster_path}
          className="w-full border-b-2 border-tertiary"
          resizeMode="cover"
        />
        <Text
          className="my-2 px-2 text-2xl font-bold text-tertiary"
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default StoryCard;
