import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { icons } from "@/constants/icons";

const Header = () => {
  const router = useRouter();

  return (
    <View className="mb-4 flex flex-row items-center justify-between gap-8 bg-secondary p-6 shadow-md shadow-tertiary sm:py-4">
      <TouchableOpacity
        accessibilityLabel="Back to the previous screen"
        className="flex h-10 w-10 flex-row items-center justify-center rounded-md border-2 border-tertiary bg-accent shadow-md shadow-tertiary"
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
