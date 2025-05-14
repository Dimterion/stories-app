import { Text, View } from "react-native";

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="flex-col items-start justify-center">
    {label && <Text className="text-lg font-bold text-tertiary">{label}</Text>}
    <Text
      style={{ fontFamily: "Amaranth-Regular" }}
      className="text-lg text-tertiary"
    >
      {value || "N/A"}
    </Text>
  </View>
);

export default StoryInfo;
