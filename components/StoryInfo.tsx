import { Text, View } from "react-native";

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="flex-col items-start justify-center">
    <Text
      style={{ fontFamily: "Amaranth-Regular" }}
      className="text-lg text-tertiary"
    >
      {value || "N/A"}
    </Text>
    {label && (
      <Text
        style={{ fontFamily: "Amaranth-Bold" }}
        className="mt-4 border-t-2 border-tertiary text-lg text-tertiary"
      >
        {label}
      </Text>
    )}
  </View>
);

export default StoryInfo;
