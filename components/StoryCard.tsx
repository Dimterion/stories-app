import { Image, Text, TouchableOpacity } from "react-native";

import { Link } from "expo-router";

const StoryCard = ({ id, title, poster_path }: Story) => {
  return (
    <Link
      href={`/stories/${id}`}
      asChild
      className="flex items-center rounded-md border-2 border-tertiary bg-accent shadow-md shadow-tertiary"
    >
      <TouchableOpacity className="max-h-[400px] w-[90%] max-w-[80vw] sm:max-w-[350px]">
        <Image
          source={poster_path}
          className="max-h-[350px] w-full max-w-[80vw] rounded-t border-x-2 border-b-2 border-tertiary sm:max-w-[350px]"
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
