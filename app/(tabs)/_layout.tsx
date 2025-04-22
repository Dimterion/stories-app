import { Image, Text, View } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <View>
        <Text className="text-tertiary font-semibold flex flex-row flex-1 w-20 p-2 justify-center items-center bg-accent rounded-md">
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View className="size-full justify-center items-center rounded-md">
      <Image source={icon} tintColor="#1B263B" className="size-5" />
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
        },
        tabBarStyle: {
          backgroundColor: "#EDEEC9",
          position: "absolute",
          overflow: "hidden",
          shadowColor: "#1B263B",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="About" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
