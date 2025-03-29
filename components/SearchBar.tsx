import { View, Image } from "react-native";
import { icons } from "@/constants/icons";

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
    </View>
  );
};

export default SearchBar;
