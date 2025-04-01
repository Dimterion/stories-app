import { FlatList, Image, View } from "react-native";
import { images } from "@/constants/images";
import { stories } from "@/assets/stories";
import StoryCard from "@/components/StoryCard";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

const Search = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList
        data={stories}
        renderItem={({ item }) => <StoryCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image
                source={icons.logo}
                className="w-full h-52 max-w-[20vw] max-h-[20vw]"
              />
            </View>
            <View className="my-5">
              <SearchBar placeholder="Search stories..." />
            </View>
          </>
        }
      />
    </View>
  );
};

export default Search;
