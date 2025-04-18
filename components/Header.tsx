import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { icons } from "@/constants/icons";

const Header = () => {
  const router = useRouter();

  return (
    <View className="flex flex-row p-2 sm:p-5 bg-secondary justify-between shadow-tertiary shadow-md mb-4">
      <TouchableOpacity
        className="bg-accent rounded-lg p-3 flex flex-row items-center justify-center border-2 border-tertiary shadow-tertiary shadow-md"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="rotate-180"
          tintColor="#1B263B"
        />
      </TouchableOpacity>
      <Text className="text-tertiary text-4xl font-bold">Stories App</Text>
    </View>
  );
};

export default Header;
