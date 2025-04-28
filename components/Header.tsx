import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { icons } from "@/constants/icons";

const Header = () => {
  const router = useRouter();

  return (
    <View className="mb-4 flex flex-row justify-between bg-secondary p-2 shadow-md shadow-tertiary sm:p-5">
      <TouchableOpacity
        className="flex flex-row items-center justify-center rounded-md border-2 border-tertiary bg-accent p-3 shadow-md shadow-tertiary"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="rotate-180"
          tintColor="#1B263B"
        />
      </TouchableOpacity>
      <Text className="text-4xl font-bold text-tertiary">Stories App</Text>
    </View>
  );
};

export default Header;
