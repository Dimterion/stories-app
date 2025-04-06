export const STORIES_CONFIG = {
  BASE_URL: "",
  API_KEY: "",
  headers: {
    accept: "application/json",
    Authorization: "",
  },
};

export const fetchStories = async ({ query }: { query: string }) => {
  const endpoint = query ? "" : "";

  const response = await fetch(endpoint, {
    method: "GET",
    headers: STORIES_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch data", response.statusText);
  }

  const data = await response.json();

  return data.results;
};

export const fetchStoryDetails = async (
  storyId: string
): Promise<StoryDetails> => {
  try {
    const response = await fetch(
      `${STORIES_CONFIG.BASE_URL}/story/${storyId}`,
      {
        method: "GET",
        headers: STORIES_CONFIG.headers,
      }
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
