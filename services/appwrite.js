import { Platform } from "react-native";
import { Account, Client, Databases, ID, Query } from "react-native-appwrite";

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID,
    metrics: process.env.EXPO_PUBLIC_APPWRITE_COL_METRICS_ID,
  },
};

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectId);

switch (Platform.OS) {
  case "ios":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID);
    break;
  case "android":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME);
    break;
}

const database = new Databases(client);

const account = new Account(client);

const updateSearchCount = async (query, story) => {
  try {
    const result = await database.listDocuments(config.db, config.col.metrics, [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingStory = result.documents[0];

      await database.updateDocument(
        config.db,
        config.col.metrics,
        existingStory.$id,
        {
          count: existingStory.count + 1,
        }
      );
    } else {
      await database.createDocument(
        config.db,
        config.col.metrics,
        ID.unique(),
        {
          searchTerm: query,
          story_id: story.id,
          title: story.title,
          count: 1,
        }
      );
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTrendingStories = async () => {
  try {
    const result = await database.listDocuments(config.db, config.col.metrics, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.documents;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export {
  database,
  config,
  client,
  account,
  updateSearchCount,
  getTrendingStories,
};
