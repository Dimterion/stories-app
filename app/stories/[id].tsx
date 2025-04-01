import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const StoryDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Story details: {id}</Text>
    </View>
  );
};

export default StoryDetailsScreen;
