import { Image, Text, View } from "react-native";
import { icons } from "@/constants/icons";

const Profile = () => {
  return (
    <View className="bg-primary flex-1 px-10 flex justify-center items-center flex-col gap-5">
      <Image source={icons.person} className="size-10" tintColor="#fff" />
      <Text className="text-gray-500 text-base">Profile</Text>
    </View>
  );
};

export default Profile;
