import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import useFetch from "@/services/useFetch";
import { fetchStories } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";

import SearchBar from "@/components/WIP/SearchBar";
import StoryCard from "@/components/StoryCard";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: stories = [],
    loading,
    error,
    refetch: loadStories,
    reset,
  } = useFetch(() => fetchStories({ query: searchQuery }), false);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadStories();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (stories?.length! > 0 && stories?.[0]) {
      updateSearchCount(searchQuery, stories[0]);
    }
  }, [stories]);

  return (
    <View className="flex-1 bg-primary">
      <FlatList
        data={stories as Story[]}
        renderItem={({ item }) => <StoryCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <Text className="text-tertiary text-center text-4xl font-bold py-5 w-full bg-secondary">
              Stories App
            </Text>

            <View className="my-5">
              <SearchBar
                placeholder="Search for a story"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000FF"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading &&
              !error &&
              searchQuery.trim() &&
              stories?.length! > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search results for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim() ? "No stories found" : "Search for a story"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default SearchScreen;
