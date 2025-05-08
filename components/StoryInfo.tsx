import { Text, View } from "react-native";

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="flex-col items-start justify-center">
    <Text className="text-base font-bold text-tertiary">{label}</Text>
    <Text className="text-base text-tertiary">{value || "N/A"}</Text>
  </View>
);

export default StoryInfo;
