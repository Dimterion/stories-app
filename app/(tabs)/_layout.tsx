import { Tabs } from "expo-router";
import { Image, ImageBackground, Text } from "react-native";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
                <Image tintColor="#151312" className="size-5" />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
