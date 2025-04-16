import { Text, View } from "react-native";

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-tertiary font-normal text-sm">{label}</Text>
    <Text className="text-tertiary font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

export default StoryInfo;
