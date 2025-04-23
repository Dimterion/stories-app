import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";

import { images } from "@/constants/images";

const TrendingCard = ({
  story: { id, title, poster_path },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/stories/${id}`} asChild>
      <TouchableOpacity className="relative pl-5">
        <Image
          source={poster_path}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-tertiary text-6xl">
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
          className="text-sm font-bold mt-2 text-tertiary"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
