import { Text, View } from "react-native";

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="mt-5 flex-col items-start justify-center">
    <Text className="text-sm font-bold text-tertiary">{label}</Text>
    <Text className="mt-2 text-sm text-tertiary">{value || "N/A"}</Text>
  </View>
);

export default StoryInfo;
