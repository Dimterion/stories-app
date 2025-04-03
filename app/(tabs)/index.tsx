import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { stories } from "@/assets/stories";
import SearchBar from "@/components/SearchBar";
import StoryCard from "@/components/StoryCard";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={icons.logo}
          className="w-full h-52 max-w-[20vw] max-h-[20vw] mt-20 mb-5 mx-auto"
        />
        {stories ? (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a story"
              value=""
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Stories
              </Text>
              <FlatList
                data={stories}
                renderItem={({ item }) => <StoryCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        ) : (
          <ActivityIndicator
            size="large"
            color="#0000FF"
            className="mt-10 self-center"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
