import { Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const StoryCard = ({ id, title, cover_img }: Story) => {
  return (
    <Link href={`/story/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={cover_img}
          className="w-full h-52 max-w-[20vw] max-h-[20vw] rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default StoryCard;
