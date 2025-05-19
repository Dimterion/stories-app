import { Text, View } from "react-native";

const StoryInfo = ({ label, value }: StoryInfoProps) => (
  <View className="flex-col justify-center">
    <Text
      style={{ fontFamily: "Amaranth-Regular" }}
      className="text-xl text-tertiary"
    >
      {value}
    </Text>
    {label && (
      <Text
        style={{ fontFamily: "Amaranth-Bold" }}
        className="mt-8 border-t-2 border-tertiary text-right text-lg text-tertiary"
      >
        {label}
      </Text>
    )}
  </View>
);

export default StoryInfo;
