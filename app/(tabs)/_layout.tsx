import { Image, Text, View } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <View>
        <Text className="flex w-20 flex-1 flex-row items-center justify-center rounded-md bg-accent text-center font-semibold text-tertiary">
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View className="size-full items-center justify-center rounded-md">
      <Image source={icon} tintColor="#1B263B" />
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
          marginTop: 6,
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
            <TabIcon focused={focused} icon={icons.info} title="About" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
