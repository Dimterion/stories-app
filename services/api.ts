export const STORIES_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_BASE_URL,
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
};

export const fetchStories = async ({
  query,
}: {
  query: string;
}): Promise<Story[]> => {
  const endpoint = query
    ? `${STORIES_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(
        query
      )}`
    : `${STORIES_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: STORIES_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data:" ${response.statusText}`);
  }

  const data = await response.json();

  return data.results;
};

export const fetchStoryDetails = async (
  storyId: string
): Promise<StoryDetails> => {
  try {
    const response = await fetch(
      `${STORIES_CONFIG.BASE_URL}/movie/${storyId}?api_key=${STORIES_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: STORIES_CONFIG.headers,
      }
    );

    if (!response.ok)
      throw new Error(`Failed to fetch data: ${response.statusText}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};
