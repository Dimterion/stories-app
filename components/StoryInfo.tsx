import { Text, View } from "react-native";

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="flex-col items-start justify-center">
    <Text className="p-2 text-base font-bold text-tertiary">{label}</Text>
    <Text className="p-2 text-base text-tertiary">{value || "N/A"}</Text>
  </View>
);

export default StoryInfo;
