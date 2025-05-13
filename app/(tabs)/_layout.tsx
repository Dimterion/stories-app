import { Image, View } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View
      className={
        focused
          ? "items-center justify-center rounded-md bg-accent p-6"
          : "items-center justify-center rounded-md p-6"
      }
    >
      <Image source={icon} className="size-5" tintColor="#1B263B" />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        },
        tabBarStyle: {
          backgroundColor: "#EDEEC9",
          position: "absolute",
          overflow: "hidden",
          boxShadow: "0px -2px 5px rgba(27, 38, 59, 0.5)",
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.info} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
