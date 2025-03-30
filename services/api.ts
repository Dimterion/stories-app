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
