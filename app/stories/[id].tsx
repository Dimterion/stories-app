import { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { stories } from "@/assets/texts/stories";
import { icons } from "@/constants/icons";

import Header from "@/components/Header";
import StoryInfo from "@/components/StoryInfo";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

const StoryDetailsScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const storyId =
    typeof id === "string"
      ? parseInt(id, 10)
      : Array.isArray(id)
        ? parseInt(id[0], 10)
        : id;

  const scrollRef = useRef<ScrollView>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowScrollBtn(offsetY > 50);
  };

  return (
    <View className="flex-1 bg-primary pb-2">
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingBottom: 30 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Header />
        <View className="max-h-[370px] sm:max-h-[550px]">
          <Image
            source={stories[storyId]?.poster_path}
            className="mx-auto mt-4 max-h-[350px] max-w-[90vw] rounded-md sm:max-h-[500px]"
            resizeMode="cover"
          />
        </View>

        <View className="mx-auto max-w-[1024px] flex-col items-start justify-center px-5 sm:px-10">
          <Text
            style={{ fontFamily: "Amaranth-Bold" }}
            className="mx-auto my-8 text-center text-3xl text-tertiary sm:text-4xl"
          >
            {stories[storyId]?.title}
          </Text>

          <StoryInfo
            label={stories[storyId]?.post_date || undefined}
            value={stories[storyId]?.text}
          />

          {stories[storyId].tags?.length > 0 && (
            <StoryInfo
              label={" "}
              value={stories[storyId]?.tags.map((c: string) => c).join(" • ")}
            />
          )}

          <Text
            style={{ fontFamily: "Amaranth-Bold" }}
            className="mx-auto mt-4 text-center text-2xl text-tertiary sm:text-4xl"
          >
            Thank you for reading.
          </Text>
        </View>
        <TouchableOpacity
          accessibilityLabel="Back to the Stories List"
          className="w-70 mx-auto mt-8 flex max-w-[90vw] flex-row items-center justify-between rounded-md border-2 border-tertiary bg-accent p-3 shadow-md shadow-tertiary"
          onPress={() => router.push("/")}
        >
          <Image
            source={icons.arrow}
            className="mr-1 mt-0.5 size-5 rotate-180"
            tintColor="#1B263B"
          />
          <Text
            style={{ fontFamily: "Amaranth-Bold" }}
            className="text-lg text-tertiary"
          >
            Back to the Stories List
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollToTopBtn scrollRef={scrollRef} isVisible={showScrollBtn} />
    </View>
  );
};

export default StoryDetailsScreen;
