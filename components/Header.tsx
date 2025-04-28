import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { icons } from "@/constants/icons";

const Header = () => {
  const router = useRouter();

  return (
    <View className="mb-4 flex flex-row items-center justify-between bg-secondary p-3 shadow-md shadow-tertiary sm:p-4">
      <TouchableOpacity
        className="flex h-8 w-8 flex-row items-center justify-center rounded-md border-2 border-tertiary bg-accent shadow-md shadow-tertiary sm:h-10 sm:w-10"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="rotate-180"
          tintColor="#1B263B"
        />
      </TouchableOpacity>
      <Text className="text-3xl font-bold text-tertiary sm:text-4xl">
        Stories App
      </Text>
    </View>
  );
};

export default Header;
