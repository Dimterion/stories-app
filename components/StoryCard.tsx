import { Image, Text, TouchableOpacity } from "react-native";

import { Link } from "expo-router";

const StoryCard = ({ id, title, poster_path }: Story) => {
  return (
    <Link
      href={`/stories/${id}`}
      asChild
      className="border-2 border-tertiary rounded-md bg-accent flex items-center shadow-md shadow-tertiary"
    >
      <TouchableOpacity className="w-[40%] max-w-[250px]">
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
          className="text-lg px-2 font-bold text-tertiary my-2"
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default StoryCard;
