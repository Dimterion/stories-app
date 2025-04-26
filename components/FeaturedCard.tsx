import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";

import { images } from "@/constants/images";

const FeaturedCard = ({
  story: { id, title, poster_path },
  index,
}: FeaturedCardProps) => {
  return (
    <Link href={`/stories/${id}`} asChild>
      <TouchableOpacity className="relative pl-5">
        <Image
          source={poster_path}
          className="h-48 w-32 max-w-[80vw] rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute -left-3.5 bottom-9 rounded-full px-2 py-1">
          <MaskedView
            maskElement={
              <Text className="text-6xl font-bold text-tertiary">
                {index + 1}
              </Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>

        <Text
          className="mt-2 text-sm font-bold text-tertiary"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default FeaturedCard;
